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
  render() {
    return (
      <div className="product-container">
        <div className="product-create" onClick={() => {
          // props.history.push('/new/product');
          window.scrollTo(0, 0);
        }}>
          <button>Create a new product HERE</button>
        </div>

        {this.props.products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={this.checkAndGo}>
            <img className="product-image" alt={product.beanType} src={product.image} />

            <p>Origines: {product.geography}</p>
            <p>Altitude: {product.altura}</p>
            <p>Toast: {product.toast}</p>
            <p>Aroma: {product.aroma}</p>
            <p>Body: {product.body}</p>
            <p>Acidity: {product.acidity}</p>
          </div>
        ))}


      </div>
    )
  }
}

// export default withRouter(ProductsView);

export default withRouter(ProductView);