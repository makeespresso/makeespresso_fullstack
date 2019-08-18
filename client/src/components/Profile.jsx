import React, { Component } from 'react'
import decode from 'jwt-decode';
import ProductView from './ProductView';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      products: ""
    }

    console.log(this.props)
  }

  async componentWillMount() {
    console.log('props', this.props)
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      // const products = await this.props.getUserProducts(user.user_id)
      this.setState({
        currentUser: user,
        products: this.props.products
      })
    }
    console.log(this.state)
  }

  edit(id) {
    this.props.history.push('/products/' + id)
  }

  render() {
    // in order to get the user data from  that is stored in local storage JWT
    // pull it from the state, current user. 
    let { username } = this.state.currentUser
    let { products, gotProducts } = this.state
    console.log('products> /', products)
    return (
      <>
        <article className="sidebar">
          <img className="picture-profile" src="https://images.unsplash.com/photo-1518116486719-4f46886d9aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt="Picture Profile" />
          <h1>{username}'s Profile</h1>

        </article>
        <div>
          {products.map(product => (
            <div
              key={product.id}
            >
              {product.user_id === this.state.currentUser.user_id ?
                <div className="product-card"
                  onClick={() => { this.edit(product.id) }}>
                  <img className="product-image" alt={product.beanType} src={product.image} />
                  <p>Origin: {product.geography}</p>
                  <p>Altitude: {product.altura}</p>
                  <p>Toast: {product.toast}</p>
                  <p>Aroma: {product.aroma}</p>
                  <p>Body: {product.body}</p>
                  <p>Acidity: {product.acidity}</p>
                </div>

                : <></>
              }

            </div>
          ))}
        </div>
      </>
    )
  }
}
export default withRouter(Profile);



