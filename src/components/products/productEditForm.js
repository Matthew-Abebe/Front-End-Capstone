import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProductEditForm extends Component {

    state = {
        product_name: "",
        sale_price: "",
        manufacture_cost: "",
        description: "",
        productId: ""

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
            product_name: this.state.product_name,
            sale_price: this.state.sale_price,
            description: this.state.description
        }

        // console.log(editedProduct)
        this.props.putProduct(editedProduct)
            .then(() => this.props.history.push("/products"))
    }


    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.productId)
            .then(product => {
                console.log(product)
                this.setState({
                    product_name: product.product_name,
                    sale_price: product.sale_price,
                    description: product.description
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="productForm">
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
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
                        <label htmlFor="productSalePrice">Product Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sale_price"
                            value={this.state.sale_price}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            value={this.state.description}
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