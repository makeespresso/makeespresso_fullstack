import React from 'react';
import { withRouter } from 'react-router';

function ProductsView(props) {
  return (
    <div className="product-container">
      {props.products.map(product => (
        <div
          key={product.id}
          className="product-card"
          onClick={(e) => {
            props.history.push(`/products/${product.id}`);
            window.scrollTo(0, 0);
          }}>
          <img alt={product.name} src={product.photo} />
          <h3>
            <p>{product.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="product-card"
        onClick={() => {
          props.history.push('/new/product');
          window.scrollTo(0, 0);
        }}>
        {/* <img
          alt="Create a new product"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" /> */}
        <button>Create a new product</button>
      </div>
    </div>
  )
}

export default withRouter(ProductsView);