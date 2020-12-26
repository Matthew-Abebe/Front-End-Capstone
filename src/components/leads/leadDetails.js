import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Button, Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';

import './leadDetails.css'

export default class LeadDetails extends Component {

    state = {
        leadId: "",
        first_name: "",
        last_name: "",
        email_address: "",
        lead_address: ""
    };

    componentDidMount() {
        DbCalls.getLead(this.props.match.params.leadId)
            .then(lead => {
                console.log(lead)
                this.setState({
                    leadId: lead.id,
                    first_name: lead.first_name,
                    last_name: lead.last_name,
                    email_address: lead.email_address,
                    phone_number: lead.phone_number,
                    lead_address: lead.lead_address,
                })
            }
            )
    }

    render() {
        return (
            <div>
                <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardBody>
                        <CardTitle>
                            <h2>{this.state.first_name} {this.state.last_name}</h2>
                        </CardTitle>
                        <CardText>
                            <p>Email: {this.state.email_address}</p>
                        </CardText>
                        <CardText>
                            <p>Phone: {this.state.phone_number}</p>
                        </CardText>
                        <CardText>
                            <p>Address: {this.state.lead_address}</p>
                        </CardText>

                        <ButtonGroup>
                        <Link to={`/leads/${this.state.leadId}/edit`}>
                            <Button color="success" size="sm" className="editLeadBtn">Edit</Button>
                        </Link>
                        <Link to={`/leads`}>
                        <Button color="success" size="sm" className="deleteLeadBtn" onClick={() =>
                            this.props.deleteLead(this.state.leadId)} className="deleteProductBtn">
                            Delete
                            </Button>
                            </Link>
                            </ButtonGroup> 
                    </CardBody>
                </Card>
            </div>

        )
    }
}
