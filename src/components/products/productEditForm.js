import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';

import './products.css'

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
        stateToChange[evt.target.id] = evt.target.value
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

            <div className="editProduct">
                <h2>Edit your Product</h2>
                </div>

                <form className="productEditForm">
                    <div className="form-group">
                        <label htmlFor="Product Name"></label>
                        <Input
                            type="text"
                            required
                            className="productEditNameForm"
                            onChange={this.handleFieldChange}
                            id="productName"
                            value={this.state.productName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Price"></label>
                        <Input
                            type="text"
                            required
                            className="productEditPriceForm"
                            onChange={this.handleFieldChange}
                            id="productPrice"
                            value={this.state.productPrice}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Vendor"></label>
                        <Input
                            type="text"
                            required
                            className="productEditVendorForm"
                            onChange={this.handleFieldChange}
                            id="productVendor"
                            value={this.state.productVendor}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Description"></label>
                        <Input
                            type="text"
                            required
                            className="productEditDescriptionForm"
                            onChange={this.handleFieldChange}
                            id="productDescription"
                            value={this.state.productDescription}
                        />
                    </div>

                    <Button className="editProductBtn" color="success" type="submit"
                        onClick={(evt) => this.updateExistingProduct(evt)}
                        className="editProductBtn">Save Edit
                    </Button>
                </form>

            </React.Fragment>
        )
    }
}