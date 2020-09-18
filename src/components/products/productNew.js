import React, { Component } from "react";

export default class ProductNewForm extends Component {

    state = {
        product_name: "",
        sale_price: "",
        manufacture_cost: "",
        description: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProduct = evt => {

        let userId = sessionStorage.getItem("userId")

        const newProduct = {
            product_name: this.state.product_name,
            sale_price: this.state.sale_price,
            description: this.state.description,
            userId: parseInt(userId)
        }

        console.log(newProduct)

        this.props.addProducts(newProduct)
            .then(() => this.props.history.push("/products"))
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
                            placeholder="Product Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="salePrice">Sale Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sale_price"
                            placeholder="Sale Price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="Description"
                        />
                    </div>

                    <button type="button" onClick={this.constructNewProduct} className="addProductBtn">Submit</button>




                </form>



//             </React.Fragment>
        )
    }
}