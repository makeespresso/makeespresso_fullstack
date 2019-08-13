import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateProduct(props) {
  return (
    <div className="create-form" >
      <h2>Create a new product</h2>
      <form onSubmit={props.newProduct}>
        <p>Upload Picture:</p>
        <input type="text" name="image" value={props.productForm.image} onChange={props.handleFormChange} />
        <p>Coffee Type:</p>
        <input type="text" name="beanType" value={props.productForm.beanType} onChange={props.handleFormChange} />
        <p>Geography:</p>
        <input type="text" name="geography" value={props.productForm.geography} onChange={props.handleFormChange} />
        <p>Altitude:</p>
        <input type="text" name="altura" value={props.productForm.altura} onChange={props.handleFormChange} />
        <p>Toast:</p>
        <input type="text" name="toast" value={props.productForm.toast} onChange={props.handleFormChange} />
        <p>Aroma:</p>
        <input type="text" name="aroma" value={props.productForm.aroma} onChange={props.handleFormChange} />
        <p>Body:</p>
        <input type="text" name="body" value={props.productForm.body} onChange={props.handleFormChange} />
        <p>Acidity:</p>
        <input type="text" name="acidity" value={props.productForm.acidity} onChange={props.handleFormChange} />
        <hr></hr>
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateProduct);