import React, { Component } from "react";
import { Button } from 'reactstrap';

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

    constructNewProduct = evt => {

        let userId = sessionStorage.getItem("userId")

        const newProduct = {
            userId: parseInt(userId),
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productVendor: this.state.productVendor,
            productDescription: this.state.productDescription
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
                        <label htmlFor="Product Name"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productName"
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Price"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productPrice"
                            placeholder="Price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Product Vendor"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="productVendor"
                            placeholder="Vendor"
                        />
                    </div>

                    

                    <div className="form-group">
                        <label htmlFor="Product Description"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
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