import React from 'react';
import { withRouter } from 'react-router';

function ProductsView(props) {
  return (
    <div className="product-container">
      <div className="product-create" onClick={() => {
        props.history.push('/new/product'); window.scrollTo(0, 0);
      }}>
        {/* <img
          alt="Create a new product"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" /> */}
        <button>Create a new product HERE</button>
      </div>

      {props.products.map(product => (
        <div
          key={product.id}
          className="product-card"
          onClick={(e) => {
            props.history.push(`/products/${product.id}`);
            window.scrollTo(0, 0);
          }}>
          <img className="product-image" alt={product.beanType} src={product.image} />

          <p>Origin: {product.geography}</p>
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

export default withRouter(ProductsView);