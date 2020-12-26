import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';

export default class NewProductForm extends Component {

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
        this.setState(stateToChange)
    }

    constructNewProduct = () => {
        let userId = sessionStorage.getItem("userId")
        const newProduct = {
            userId: parseInt(userId),
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productVendor: this.state.productVendor,
            productDescription: this.state.productDescription
        }

        this.props.addProducts(newProduct)
            .then(() => this.props.history.push("/products"))
    }

    render() {

        return (
            <React.Fragment>

            <div className="createProduct">
                <h2>Create a new Product</h2>
                </div>

                 <form className="productForm">
                    <div className="form-group">
                        <label htmlFor="Product Name"></label>
                        <Input
                            type="text"
                            required
                            className="productNameForm"
                            onChange={this.handleFieldChange}
                            id="productName"
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Price"></label>
                        <Input
                            type="text"
                            required
                            className="productPriceForm"
                            onChange={this.handleFieldChange}
                            id="productPrice"
                            placeholder="Price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Vendor"></label>
                        <Input
                            type="text"
                            required
                            className="productVendorForm"
                            onChange={this.handleFieldChange}
                            id="productVendor"
                            placeholder="Vendor"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Description"></label>
                        <Input
                            type="text"
                            required
                            className="productDescriptionForm"
                            onChange={this.handleFieldChange}
                            id="productDescription"
                            placeholder="Description"
                        />
                    </div>

                    <br></br>
            
                    <Button color="success" type="button" onClick={this.constructNewProduct} className="addProductBtn">Submit</Button>
                </form>

             </React.Fragment>
        )
    }
}