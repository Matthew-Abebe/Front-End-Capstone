import React, { Component } from "react";

export default class NewProductForm extends Component {

    state = {
        product_name: "",
        product_price: "",
        product_vendor: "",
        product_description: ""
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
            product_price: this.state.product_price,
            product_vendor: this.state.product_vendor,
            product_description: this.state.product_description,
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
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="productPrice">Product Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_price"
                            placeholder="Price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="productVendor">Product Vendor</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_vendor"
                            placeholder="Vendor"
                        />
                    </div>

                    

                    <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_description"
                            placeholder="Description"
                        />
                    </div>
            
                    <button type="button" onClick={this.constructNewProduct} className="addProductBtn">Submit</button>




                </form>



             </React.Fragment>
        )
    }
}