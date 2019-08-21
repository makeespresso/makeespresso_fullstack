import React, { Component } from 'react';
import EditProduct from './EditProduct'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-page">
        {product === undefined ? <h2>Loading</h2> : (
          <div>
            <img alt={product.name} src={product.photo} />
            {this.state.isEdit ?
              <Route path={'/products/:id/edit'} render={() => (
                <EditProduct
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.EditProduct();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/products/${this.props.productForm.id}`)
                  }}
                  productForm={this.props.productForm} />
              )} />
              :
              <>
                {this.props.currentUser.user_id === product.user_id && <h1>Coffee view:</h1>}
                <div className="product-card-on-Profile">
                  <img className="product-image-2" alt={product.beanType} src={product.image} />
                  <div className="product-description">
                    <p><b>Origin:</b> {product.geography}</p>
                    <p><b>Altitude:</b> {product.altura}</p>
                    <p><b>Toast:</b> {product.toast}</p>
                    <p><b>Aroma:</b> {product.aroma}</p>
                    <p><b>Body:</b> {product.body}</p>
                    <p><b>Acidity:</b> {product.acidity}</p>
                  </div>
                </div>
                {this.props.currentUser.user_id === product.user_id &&
                  <>
                    <button className="input-button" onClick={() => {
                      this.setState({
                        isEdit: true
                      })
                      this.props.history.push(`/products/${product.id}/edit`)
                    }}>Edit</button>
                    <button className="input-button" onClick={() => {
                      this.props.deleteProduct(product.id);
                      this.props.history.push('/')
                    }}>Delete</button>
                  </>}
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(ProductsView);