import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProbabilityDriveTicketEditForm extends Component {

    state = {
        driveName: "",
        locationName: "",
        // driveTicketId: ""

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
            id: this.props.match.params.id, //Undefined issue here!//
            driveName: this.state.drive_name,
            locationName: this.state.location_name,
        }

        console.log(editedDriveTicket)
        this.props.putDriveTicket(editedDriveTicket)
            .then(() => this.props.history.push("/probabilityDriveTickets"))
    }


    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.id)
            .then(driveTicket => {
                this.setState({
                    driveName: driveTicket.drive_name,
                    locationName: driveTicket.location_name,
                })
                console.log(driveTicket)
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
                            value={this.state.driveName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="locationName">Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location_name"
                            value={this.state.locationName}
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