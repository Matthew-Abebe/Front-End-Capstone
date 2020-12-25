import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class SalesEditForm extends Component {

    state = {
        saleId: "",
        selectedLead: "",
        selectedProduct: "",
        drive_name: "",
        location_name: "",
        dateTime: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
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
            dateTime: this.state.dateTime
        }

        // console.log(editedDriveTicket)
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
                    // drive_name: driveTicket.drive_name,
                    // location_name: driveTicket.location_name,
                    dateTime: sale.dateTime
                })
                // console.log(driveTicket)
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="driveTicketForm">
                    <div className="form-group">
                        <label htmlFor="selectedLead">Selected Lead</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="selectedLead"
                            value={this.state.selectedLead}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="selectedProduct">Selected Product</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="selectedProduct"
                            value={this.state.selectedProduct}
                        />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="ticketDateTime">Time</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ticket_date_time"
                            value={this.state.ticket_date_time}
                        />
                    </div> */}


                    <button type="submit"
                        onClick={(evt) => this.updateExistingSale(evt)}
                        className="editDriveTicketBtn"
                    >
                        Save Edit
                        </button>
                </form>

            </React.Fragment>
        )
    }
}