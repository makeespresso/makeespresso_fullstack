import React from 'react';
import { withRouter } from 'react-router-dom';

function EditProduct(props) {
  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={props.editProduct}>
        <p>Image:</p><input type="text" name="image" placeholder="Image URL" value={props.productForm.photo} onChange={props.handleFormChange} />
        <p>Altitude:</p><input type="text" name="altitude" placeholder="Altitude" value={props.productForm.name} onChange={props.handleFormChange} />
        <p>Toast:</p><input type="text" name="toast" placeholder="Toast" value={props.productForm.name} onChange={props.handleFormChange} />
        <p>Aroma:</p><input type="text" name="aroma" placeholder="Aroma" value={props.productForm.name} onChange={props.handleFormChange} />
        <p>Body:</p><input type="text" name="body" placeholder="Body" value={props.productForm.name} onChange={props.handleFormChange} />
        <p>Acidity:</p><input type="text" name="acidity" placeholder="Acidity" value={props.productForm.name} onChange={props.handleFormChange} />
        <hr></hr>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditProduct);
