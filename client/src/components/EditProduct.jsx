import React from 'react';
import { withRouter } from 'react-router-dom';

function EditProduct(props) {
  return (
    <div>
      <h3>Create a new product</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.productForm.photo}
          onChange={props.handleFormChange} />
        <p>Coffee:</p>

        <input
          type="text"
          name="name"
          value={props.productForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditProduct);
