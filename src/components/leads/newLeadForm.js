import React, { Component } from "react";
import { Button } from 'reactstrap';

export default class NewLeadForm extends Component {

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
        this.setState(stateToChange)
    }

    constructNewLead = evt => {

        let userId = sessionStorage.getItem("userId")

        const newLead = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
            phone_number: this.state.phone_number,
            lead_address: this.state.lead_address,
            userId: parseInt(userId)
        }

        console.log(newLead)

        this.props.addLeads(newLead)
            .then(() => this.props.history.push("/leads"))
    }

    render() {

        return (
            <React.Fragment>

                 <form className="productForm">
                    <div className="form-group">
                        <label htmlFor="productName"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="first_name"
                            placeholder="First Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="productName"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="last_name"
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAddress"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email_address"
                            placeholder="Email Address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone_number"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="leadAddress"></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="lead_address"
                            placeholder="Lead Address"
                        />
                    </div>

                    <br></br>

                    <Button type="button" color="success" onClick={this.constructNewLead} className="addProductBtn">Submit</Button>
                </form>
             </React.Fragment>
        )
    }
}