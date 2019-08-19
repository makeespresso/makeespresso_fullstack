import { withRouter } from 'react-router';
import React, { Component } from 'react'
import { thisTypeAnnotation } from '@babel/types';

class ProductView extends Component {

  checkAndGo = () => {
    if (this.props.currentUser) {
      this.props.history.push('/new/product');
    } else {
      this.props.history.push('/login');
    }
  }
  goEdit = (id) => {
    this.props.history.push(`/products/${id}/edit`)
  }

  render() {
    console.log(this.props)
    return (
      <div className="product-container">
        <img className="hero-image" src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" alt="Coffee bag" />


        {/* Add a new product bar appears only if there's a logged user */}
        {this.props.currentUser ?
          <div className="product-create">
            <p>Tell us about about your new discover:</p>
            <button onClick={this.checkAndGo}>Add a new product</button>
          </div>
          : <></>
        }
        {/* <div className="product-create" onClick={() => {
          // props.history.push('/new/product');

          window.scrollTo(0, 0);
        }}>
          <p>Tell us about about your new discover:</p>
          onClick={this.checkAndGo(`/products/${product.id}/edit`)}>
          <button onClick={this.checkAndGo}>Add a new product</button>
        </div> */}

        {this.props.products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => { this.props.history.push('/products/' + product.id) }}
          >
            <img className="product-image" alt={product.beanType} src={product.image} />
            <p>Origin: {product.geography}</p>
            {/* <p>Altitude: {product.altura}</p>
            <p>Toast: {product.toast}</p>
            <p>Aroma: {product.aroma}</p>
            <p>Body: {product.body}</p>
            <p>Acidity: {product.acidity}</p> */}

            {product.user_id === this.props.currentUser.user_id ?
              <input TYPE="button" value="Edit Product" onClick={() => { this.goEdit(product.id) }}></input>
              : <></>
            }

          </div>
        ))}

        <div className="product-create" onClick={() => { window.scrollTo(0, 0); }}>
          <span>Scroll up</span>
        </div>
      </div>

    )
  }
}

// export default withRouter(ProductsView);

export default withRouter(ProductView);