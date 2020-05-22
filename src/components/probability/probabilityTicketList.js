import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle } from 'reactstrap';

import './probability.css'



export default class ProbabilityTicketList extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    

    render() {
        console.log(this.props.driveTickets)
        return (


            <React.Fragment>

<div>
                <section className="driveTickets">
                    <h2>Drive Tickets</h2>
                    {
                        this.props.driveTickets.map(driveTicket =>
                            <div key={driveTicket.id}>

                                <Card body inverse color="secondary">
                                    <CardTitle  tag="a" href={`/probabilityDriveTickets/${driveTicket.id}`}>
                                        <h2>Name: {driveTicket.drive_name}</h2>
                                        <h4>Location: {driveTicket.location_name}</h4>
                                        <br></br>

                                    
                                    </CardTitle>
                                </Card>

                            </div>

                        )}
                </section>
            </div>

        </React.Fragment>
    )
}
}
