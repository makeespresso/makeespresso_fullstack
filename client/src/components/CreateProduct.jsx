import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateProduct(props) {
  return (
    <div className="create-form" >
      <h2>Create a new product</h2>
      <form onSubmit={props.newProduct}>
        <p>Upload Picture:</p>
        <input
          type="text"
          name="photo"
          value={props.productForm.photo}
          onChange={props.handleFormChange} />
        <p>Coffee Type:</p>
        <input type="text" name="name" value={props.productForm.name} onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateProduct);