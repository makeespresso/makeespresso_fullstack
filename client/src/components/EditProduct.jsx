import React from 'react';
import { withRouter } from 'react-router-dom';

function EditProduct(props) {
  return (
    <div>
      <h3>Create a new product</h3>
      <form onSubmit={props.editProduct}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="image"
          value={props.productForm.photo}
          onChange={props.handleFormChange} />
        <p>Coffee:</p>

        <input
          type="text"
          name="geography"
          value={props.productForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditProduct);
