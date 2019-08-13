import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import ProductsView from './ProductView';
import ProductPage from './ProductPage';
import CreateProduct from './CreateProduct';
import Login from './Login';
import Register from './Register';

import {
  createProduct,
  readAllProducts,
  updateProduct,
  destroyProduct,
  loginUser,
  registerUser
} from '../services/api'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productForm: {
        name: "",
        photo: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  componentDidMount() {
    this.getProducts();
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  getProducts = async () => {
    const products = await readAllProducts();
    this.setState({
      products
    })
  }

  newProduct = async (e) => {
    e.preventDefault();
    const product = await createProduct(this.state.productForm);
    this.setState(prevState => ({
      products: [...prevState.products, product],
      productForm: {
        name: "",
        photo: ""
      }
    }))
    this.props.history.push('/');
  }

  editProduct = async () => {
    const { productForm } = this.state
    await updateProduct(productForm.id, productForm);
    this.setState(prevState => (
      {
        products: prevState.products.map(product => product.id === productForm.id ? productForm : product),
      }
    ))
  }

  deleteProduct = async (id) => {
    await destroyProduct(id);
    this.setState(prevState => ({
      products: prevState.products.filter(product => product.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      productForm: {
        ...prevState.productForm,
        [name]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const products = await readAllProducts();
    const product = products.find(el => el.id === parseInt(id));
    this.setState({
      productForm: product
    });
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token);
    this.props.history.push('/');
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div >
        <section>
          <h1><Link to='/' onClick={() => this.setState({
            productForm: {
              name: "",
              photo: ""
            }
          })}>makeespresso</Link></h1>
          <div>
            {this.state.currentUser
              ?
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>logout</button>
              </>
              :
              <button onClick={this.handleLoginButton}>Login/register</button>
            }
          </div>
        </section>
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/" render={() => (
          <ProductsView
            products={this.state.products}
            productForm={this.state.productForm}
            handleFormChange={this.handleFormChange}
            newProduct={this.newProduct}
          />
        )}
        />
        <Route
          path="/new/product"
          render={() => (
            <CreateProduct
              handleFormChange={this.handleFormChange}
              productForm={this.state.productForm}
              newProduct={this.newProduct} />
          )} />
        <Route
          path="/products/:id"
          render={(props) => {
            const { id } = props.match.params;
            const product = this.state.products.find(el => el.id === parseInt(id));
            return <ProductPage
              id={id}
              product={product}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editProduct={this.editProduct}
              productForm={this.state.productForm}
              deleteProduct={this.deleteProduct} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(RegistrationForm);