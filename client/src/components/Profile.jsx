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
      <div className="profile-container">
        {/* <div className="sidebar">
          <img className="picture-profile" src="https://images.unsplash.com/photo-1518116486719-4f46886d9aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" alt="Picture Profile" />
          <h1>{username}'s Profile</h1>
        </div> */}
        <div>
          {products.map(product => (
            <div
              key={product.id}
            >
              {product.user_id === this.state.currentUser.user_id ?
                <div className="product-card-on-Profile"
                  onClick={() => { this.edit(product.id) }}>
                  <img className="product-image-2" alt={product.beanType} src={product.image} />
                  <div className="product-description">
                    <p><b>Origin:</b> {product.geography}</p>
                    <p><b>Altitude:</b> {product.altura}</p>
                    <p><b>Toast:</b> {product.toast}</p>
                    <p><b>Aroma:</b> {product.aroma}</p>
                    <p><b>Body: </b>{product.body}</p>
                    <p><b>Acidity:</b> {product.acidity}</p>
                  </div>
                </div>

                : <></>
              }
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default withRouter(Profile);



