import React from 'react';
import { withRouter } from 'react-router-dom';

function EditProduct(props) {
  return (
    <div className="edit-page">
      <h1>Edit Product</h1>
      < div className="edit-form">
        <form onSubmit={props.editProduct}>
          <span><b>Image:   </b></span><input type="text" name="image" placeholder="Image URL" value={props.productForm.photo} onChange={props.handleFormChange} />
          <span><b>Altitude:</b></span><input type="text" name="altitude" placeholder="Altitude" value={props.productForm.name} onChange={props.handleFormChange} />
          <span><b>Toast:   </b></span><input type="text" name="toast" placeholder="Toast" value={props.productForm.name} onChange={props.handleFormChange} />
          <span><b>Aroma:   </b></span><input type="text" name="aroma" placeholder="Aroma" value={props.productForm.name} onChange={props.handleFormChange} />
          <span><b>Body:    </b></span><input type="text" name="body" placeholder="Body" value={props.productForm.name} onChange={props.handleFormChange} />
          <span><b>Acidity: </b></span><input type="text" name="acidity" placeholder="Acidity" value={props.productForm.name} onChange={props.handleFormChange} />
          <br />
          <button className="input-button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(EditProduct);
