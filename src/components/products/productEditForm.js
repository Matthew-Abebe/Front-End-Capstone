import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProductEditForm extends Component {

    state = {
        userId: "",
        productName: "",
        productPrice: "",
        productVendor: "",
        productDescription: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingProduct = evt => {
        evt.preventDefault()

        const editedProduct = {
            id: this.props.match.params.productId,
            userId: this.state.userId,
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productVendor: this.state.productVendor,
            productDescription: this.state.productDescription
        }

        // console.log(editedProduct)
        this.props.putProduct(editedProduct)
            .then(() => this.props.history.push("/products"))
            console.log(editedProduct)
    }


    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.productId)
            .then(product => {
                console.log(product)
                this.setState({
                    userId: product.userId,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productVendor: product.productVendor,
                    productDescription: product.productDescription
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="productEditForm">
                    <div className="form-group">
                        <label htmlFor="Product Name">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productName"
                            value={this.state.productName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Price">Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productPrice"
                            value={this.state.productPrice}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Vendor">Vendor</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productVendor"
                            value={this.state.productVendor}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Description">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productDescription"
                            value={this.state.productDescription}
                        />
                    </div>

                    <button type="submit"
                        onClick={(evt) => this.updateExistingProduct(evt)}
                        className="editProductBtn"
                    >
                        Save Edit
                        </button>
                </form>

            </React.Fragment>
        )
    }
}