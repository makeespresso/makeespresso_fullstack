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
                {this.props.currentUser.user_id === product.user_id && <p>Edit product:</p>}
                <img className="product-image-on-ProductPage" alt={product.beanType} src={product.image} />
                <p>Origin: {product.geography}</p>
                <p>Altitude: {product.altura}</p>
                <p>Toast: {product.toast}</p>
                <p>Aroma: {product.aroma}</p>
                <p>Body: {product.body}</p>
                <p>Acidity: {product.acidity}</p>
                {this.props.currentUser.user_id === product.user_id &&
                  <>
                    <button onClick={() => {
                      this.setState({
                        isEdit: true
                      })
                      this.props.history.push(`/products/${product.id}/edit`)
                    }}>Edit</button>
                    <button onClick={() => {
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