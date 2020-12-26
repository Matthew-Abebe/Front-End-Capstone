import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls';
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';

import './leads.css'

export default class LeadEditForm extends Component {

    state = {
        userId: "",
        first_name: "",
        last_name: "",
        email_address: "",
        phone_number: "",
        lead_address: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    updateExistingLead = evt => {
        evt.preventDefault()

        const editedLead = {
            id: this.props.match.params.leadId,
            userId: this.state.userId,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
            phone_number: this.state.phone_number,
            lead_address: this.state.lead_address
        }
        this.props.putLead(editedLead)
            .then(() => this.props.history.push("/leads"))
            console.log(editedLead)
    }


    componentDidMount() {
        DbCalls.getLead(this.props.match.params.leadId)
            .then(lead => {
                console.log(lead)
                this.setState({
                    userId: lead.userId,
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

        <div className="editLead">
                <h2>Edit your Lead</h2>
                </div>

                <form className="leadEditForm">
                    <div className="form-group">
                        <label htmlFor="FirstName"></label>
                        <Input
                            type="text"
                            required
                            className="leadEditFirstNameForm"
                            onChange={this.handleFieldChange}
                            id="first_name"
                            value={this.state.first_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LastName"></label>
                        <Input
                            type="text"
                            required
                            className="leadEditLastNameForm"
                            onChange={this.handleFieldChange}
                            id="last_name"
                            value={this.state.last_name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress"></label>
                        <Input
                            type="text"
                            required
                            className="leadEditEmailAddressForm"
                            onChange={this.handleFieldChange}
                            id="email_address"
                            value={this.state.email_address}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="PhoneNumber"></label>
                        <Input
                            type="text"
                            required
                            className="leadEditPhoneNumberForm"
                            onChange={this.handleFieldChange}
                            id="phone_number"
                            value={this.state.phone_number}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LeadAddress"></label>
                        <Input
                            type="text"
                            required
                            className="leadEditAddressForm"
                            onChange={this.handleFieldChange}
                            id="lead_address"
                            value={this.state.lead_address}
                        />
                    </div>

                    <Button className="editLeadBtn" color="success" type="submit"
                        onClick={(evt) => this.updateExistingLead(evt)}
                        className="editLeadBtn"
                    >
                        Save Edit
                        </Button>
                </form>
            </React.Fragment>
        )
    }
}