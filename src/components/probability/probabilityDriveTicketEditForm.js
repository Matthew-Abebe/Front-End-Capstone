import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProbabilityDriveTicketEditForm extends Component {

    state = {
        drive_name: "",
        location_name: "",
        id: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingDriveTicket = evt => {
        evt.preventDefault()

        const editedDriveTicket = {
            id: this.props.match.params.id,
            drive_name: this.state.drive_name,
            location_name: this.state.location_name,
        }

        // console.log(editedProduct)
        this.props.putDriveTicket(editedDriveTicket)
            .then(() => this.props.history.push("/probabilityDriveTickets"))
    }


    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.id)
            .then(driveTicket => {
                console.log(driveTicket)
                this.setState({
                    drive_name: driveTicket.drive_name,
                    location_name: driveTicket.location_name,
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="driveTicketForm">
                    <div className="form-group">
                        <label htmlFor="driveName">Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="drive_name"
                            value={this.state.drive_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="locationName">Product Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="drive_location"
                            value={this.state.location_name}
                        />
                    </div>


                    <button type="submit"
                        onClick={(evt) => this.updateExistingDriveTicket(evt)}
                        className="editDriveTicketBtn"
                    >
                        Save Edit
                        </button>
                </form>

            </React.Fragment>
        )
    }
}