import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProductEditForm extends Component {

    state = {
        userId: "",
        product_name: "",
        product_price: "",
        product_vendor: "",
        product_description: ""
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
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            product_vendor: this.state.product_vendor,
            product_description: this.state.product_description
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
                    product_name: product.product_name,
                    product_price: product.product_price,
                    product_vendor: product.product_vendor,
                    product_description: product.product_description
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="productEditForm">
                    <div className="form-group">
                        <label htmlFor="ProductName">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_name"
                            value={this.state.product_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ProductPrice">Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_price"
                            value={this.state.product_price}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ProductVendor">Vendor</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_vendor"
                            value={this.state.product_vendor}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ProductDescription">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_description"
                            value={this.state.product_description}
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