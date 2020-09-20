import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'

export default class ProductEditForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        email_address: "",
        phone_number: "",
        lead_address: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingLead = evt => {
        evt.preventDefault()

        const editedLead = {
            id: this.props.match.params.leadId,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
            phone_number: this.state.phone_number,
            lead_address: this.state.lead_address
        }

        // console.log(editedProduct)
        this.props.putLead(editedLead)
            .then(() => this.props.history.push("/leads"))
            console.log(editedLead)
    }


    componentDidMount() {
        DbCalls.getLead(this.props.match.params.leadId)
            .then(lead => {
                console.log(lead)
                this.setState({
                    first_name: lead.first_name,
                    last_name: lead.last_name,
                    email_address: lead.email_address,
                    phone_number: lead.phone_number,
                    lead_address: lead.lead_address
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <form className="leadEditForm">
                    <div className="form-group">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="first_name"
                            value={this.state.first_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LastName">Last Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="last_name"
                            value={this.state.last_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress">Email</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email_address"
                            value={this.state.email_address}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone_number"
                            value={this.state.phone_number}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LeadAddress">Address</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="lead_address"
                            value={this.state.lead_address}
                        />
                    </div>

                    <button type="submit"
                        onClick={(evt) => this.updateExistingLead(evt)}
                        className="editLeadBtn"
                    >
                        Save Edit
                        </button>
                </form>

            </React.Fragment>
        )
    }
}