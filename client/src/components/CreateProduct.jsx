import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateProduct(props) {
  return (
    <div style={{ height: "auto" }} className="edit-page">
      <h1>Create a new product</h1>
      <div className="edit-form" >
        <form onSubmit={props.newProduct}>
          <p><b>Picture URL:</b></p>
          <input type="text" name="image" value={props.productForm.image} onChange={props.handleFormChange} />
          <p><b>Coffee Type:</b></p>
          <input type="text" name="beanType" value={props.productForm.beanType} onChange={props.handleFormChange} />
          <p><b>Geography:</b></p>
          <input type="text" name="geography" value={props.productForm.geography} onChange={props.handleFormChange} />
          <p><b>Altitude:</b></p>
          <input type="text" name="altura" value={props.productForm.altura} onChange={props.handleFormChange} />
          <p><b>Toast:</b></p>
          <input type="text" name="toast" value={props.productForm.toast} onChange={props.handleFormChange} />
          <p><b>Aroma:</b></p>
          <input type="text" name="aroma" value={props.productForm.aroma} onChange={props.handleFormChange} />
          <p><b>Body:</b></p>
          <input type="text" name="body" value={props.productForm.body} onChange={props.handleFormChange} />
          <p><b>Acidity:</b></p>
          <input type="text" name="acidity" value={props.productForm.acidity} onChange={props.handleFormChange} />
          <br />
          <button className="input-button">Submit</button>
        </form>
      </div >
    </div>
  )
}

export default withRouter(CreateProduct);