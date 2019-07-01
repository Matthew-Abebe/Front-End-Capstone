import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class PurchaseEditForm extends Component {

    state = {
        dateTime: "",
        productName: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingPurchase = evt => {
        evt.preventDefault()

        const editedPurchase = {
            id: this.props.match.params.purchasesId,
            productName: this.state.productName,
            dateTime: this.state.dateTime
        }

        // console.log(editedProduct)
        this.props.putPurchase(editedPurchase)
            .then(() => this.props.history.push("/purchases"))
    }


    componentDidMount() {
        DbCalls.getPurchase(this.props.match.params.purchaseId)
            .then(purchase => {
                console.log(purchase)
                this.setState({
                    productName: purchase.productName,
                    dateTime: purchase.dateTime
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <div className="form-group">
                    <label htmlFor="productSalePrice">Purchased Product Name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="productName"
                        value={this.state.productName}
                    />
                </div>

                <form className="saleForm">
                    <div className="form-group">
                        <label htmlFor="saleDateTime">Purchase Date and Time</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="dateTime"
                            value={this.state.dateTime}
                        />
                    </div>


                    {/* <div className="form-group">
                        <label htmlFor="productManufactureCost">Product Manufacture Cost</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="manufacture_cost"
                            value={this.state.manufacture_cost}
                        />
                    </div> */}

                    {/* <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            value={this.state.description}
                        />
                    </div> */}

                    <button type="submit"
                        onClick={(evt) => this.updateExistingPurchase(evt)}
                        className="editSaleBtn"
                    >
                        Save Edit
                        </button>
                </form>

            </React.Fragment>
        )
    }
}