import React, { Component } from 'react'
import decode from 'jwt-decode';
import ProductView from './ProductView';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      products: "",
      gotProducts: false
    }
  }

  async componentDidMount() {
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      const products = await this.props.getUserProducts(user.user_id)
      this.setState({
        currentUser: user,
        products,
        gotProducts: true
      })
    }

  }

  render() {
    // in order to get the user data from  that is stored in local storage JWT
    // pull it from the state, current user. 
    let { username } = this.state.currentUser
    let { products, gotProducts } = this.state
    return (
      <div style={{ background: `red` }}>
        <h1>{username}'s Board</h1>
        {/* {gotProducts ?

          <ProductView productsArray={products} /> : <span>loading</span>
        } */}
      </div>
    )
  }
}




