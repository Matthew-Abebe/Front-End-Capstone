import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProbabilityDriveTicketEditForm extends Component {

    state = {
        // driveTicketId: "",
        drive_name: "",
        location_name: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingDriveTicket = evt => {
        evt.preventDefault()

        let userId = sessionStorage.getItem("userId")

        const editedDriveTicket = {
            id: this.props.match.params.driveTicketId, //Undefined issue here! Resolved I think//
            drive_name: this.state.drive_name,
            location_name: this.state.location_name,
            userId: parseInt(userId)
        }

        // console.log(editedDriveTicket)
        this.props.putDriveTicket(editedDriveTicket)
            .then(() => this.props.history.push("/probabilityDriveTickets"))
    }


    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.driveTicketId)
            .then(driveTicket => {
                this.setState({
                    // driveTicketId: driveTicket.id,
                    drive_name: driveTicket.drive_name,
                    location_name: driveTicket.location_name,
                })
                // console.log(driveTicket)
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
                        <label htmlFor="locationName">Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location_name"
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