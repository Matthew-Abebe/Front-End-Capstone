import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './sales.css'

export default class SalesEditForm extends Component {

    state = {
        saleId: "",
        selectedLead: "",
        selectedProduct: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingSale = evt => {
        evt.preventDefault()

        let userId = sessionStorage.getItem("userId")

        const editedSale = {
            id: this.props.match.params.saleId,
            selectedLead: this.state.selectedLead,
            selectedProduct: this.state.selectedProduct,
            userId: parseInt(userId),
            saleTime: this.state.saleTime
        }

        this.props.putSale(editedSale)
            .then(() => this.props.history.push("/sales"))
    }


    componentDidMount() {
        DbCalls.getSale(this.props.match.params.saleId)
            .then(sale => {
                this.setState({
                    saleId: sale.id,
                    selectedLead: sale.selectedLead,
                    selectedProduct: sale.selectedProduct,
                    saleTime: sale.saleTime
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="editSaleForm">
                    <div className="form-group">
                        <label htmlFor="editSaleNameForm"></label>
                        <Input
                            type="text"
                            required
                            className="editSaleNameForm"
                            onChange={this.handleFieldChange}
                            id="selectedLead"
                            value={this.state.selectedLead}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editSaleProductForm"></label>
                        <Input
                            type="text"
                            required
                            className="editSaleProductForm"
                            onChange={this.handleFieldChange}
                            id="selectedProduct"
                            value={this.state.selectedProduct}
                        />
                    </div>

                    <Button className="editSaleBtn" color="success" type="submit"
                        onClick={(evt) => this.updateExistingSale(evt)}
                    >
                        Save Edit
                        </Button>
                </form>

            </React.Fragment>
        )
    }
}