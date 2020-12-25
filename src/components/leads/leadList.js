import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './leads.css'



export default class LeadList extends Component {


    
    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    render() {
        console.log(this.props.leads)
        return (


            <React.Fragment>

            <div>
                <section className="leads">
                    <div className="leadsHeader">
                    <h1 className="leadsHeader">Qualified Leads</h1>
                    </div>
                    {
                        this.props.leads.map(lead =>
                            <div key={lead.id}>

                                <Card body inverse className="leadsListCard" style={{ backgroundColor: '#0f52ba', borderColor: '#333' }}>
                                    <CardTitle><h3>{lead.first_name} {lead.last_name}</h3></CardTitle>
                                        <br></br>
                        <Link to={`/leads/${lead.id}/details`}>
                        <Button className="productDetailsBtn" color="success" size="sm">
                            Details
                        </Button>
                        </Link>
                                </Card>

                            </div>
                        )}

                        <br></br>

                        <Link to={`/leads/new`}>
                        <Button className="addNewLead" color="success" size="lg">
                            Create a New Lead
                        </Button>
                        </Link>

                </section>
            </div>

        </React.Fragment>
    )
}
}
