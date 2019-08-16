import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import './App.css';

import ProductsView from './components/ProductView';
import ProductPage from './components/ProductPage';
import CreateProduct from './components/CreateProduct';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import Extractions from './components/Extractions';
import History from './components/History';

import {
  createProduct,
  readAllProducts,
  updateProduct,
  destroyProduct,
  loginUser,
  registerUser,
  readUserProducts
} from './services/api'
import EditProduct from './components/EditProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productForm: {


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
    else {
      this.props.history.push('/login');
    }
  }


  getProducts = async () => {
    const products = await readAllProducts();
    this.setState({
      products
    })
  }

  getUserProducts = async (id) => {
    const products = await readUserProducts(id);
    console.log(products)
    this.setState({
      products
    })
    console.log(this.state)
    return products
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
    this.props.history.push('/profile');
  }

  editProduct = async () => {
    const { productForm } = this.state
    await updateProduct(productForm.id, productForm);
    this.setState(prevState => (
      {
        products: prevState.products.map(product => product.id === productForm.id ? productForm : product),
      }
    ))
    this.props.history.push('/profile');
  }

  deleteProduct = async (id) => {
    await destroyProduct(id);
    this.setState(prevState => ({
      products: prevState.products.filter(product => product.id !== id)
    }))
    this.props.history.push('/profile');
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
    console.log('hello')
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData)
    })
    localStorage.setItem("jwt", userData);
    this.props.history.push('/profile');
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
    this.props.history.push('/');
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
      <div className="">
        <section className='navbar'>
          <h1><Link to='/' onClick={() => this.setState({
            productForm: {
              origin: "",
              image: ""
            }
          })}>makeespresso</Link></h1>
          <Link to='/board'><p>Coffee Board</p></Link>
          <div>
            {this.state.currentUser
              ?
              <>
                <small>Hi, <Link to='/profile'>{this.state.currentUser.username}</Link></small>

                <button onClick={this.handleLogout}>logout</button>
              </>
              :
              <button onClick={this.handleLoginButton}>Login/register</button>
            }
          </div>



        </section>
        <section className="container">
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

          <Route
            exact path="/profile"
            render={(props) => {
              return <Profile
                products={this.state.products}
                getUserProducts={this.getUserProducts}
                newProduct={this.newProduct} />
            }}
          />

          <Route exact path="/board" render={() => (
            <ProductsView
              currentUser={this.state.currentUser}
              products={this.state.products}
              productForm={this.state.productForm}
              handleFormChange={this.handleFormChange}
            />
          )}
          />

          {/* <Route exact path="/profile" render={() => (
            <ProductsView
              products={this.state.products}
              productForm={this.state.productForm}
              handleFormChange={this.handleFormChange}
              newProduct={this.newProduct}
            />
          )}
          /> */}

          <Route
            exact path="/extractions"
            render={() => (
              <Extractions />
            )}
          />

          <Route
            exact path="/history"
            render={() => (
              <History />
            )}
          />


          <Route
            exact path="/new/product"
            render={() => (
              <CreateProduct
                handleFormChange={this.handleFormChange}
                productForm={this.state.productForm}
                newProduct={this.newProduct} />
            )} />
          <Route
            exact path="/products/:id"
            render={(props) => {
              const { id } = props.match.params;
              const product = this.state.products.find(el => el.id === parseInt(id));
              return <ProductPage
                id={id}
                product={product}
                currentUser={this.state.currentUser}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                editProduct={this.editProduct}
                productForm={this.state.productForm}
                deleteProduct={this.deleteProduct} />
            }}
          />

          <Route
            exact path="/"
            render={Home}
          />

          <Route
            exact path="/products/:id/edit"
            render={(props) => {
              const { id } = props.match.params;
              const product = this.state.products.find(el => el.id === parseInt(id));
              return <EditProduct
                handleFormChange={this.handleFormChange}
                productForm={this.state.productForm}
                product={product}
                editProduct={this.editProduct}
              />
            }}
          />
        </section>
      </div>
    );
  }
}

export default withRouter(App);