import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './probabilityDrive.css'



export default class ProbabilityTicketList extends Component {

    // state = {

    // } 

    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    render() {
        // console.log(this.props.driveTickets)
        return (

            <React.Fragment>

            <div>
                <section className="driveTickets">
                    <h2>Drive Tickets</h2>
                    <br></br>

                    {
                        this.props.driveTickets.map(driveTicket =>
                            <div key={driveTicket.id}>

                                    <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardTitle  tag="a" 
                                    href={`/probabilityDriveTickets/${driveTicket.id}/details`}>
                                        <h2>{driveTicket.drive_name}</h2>
                                        <CardText><p>{driveTicket.location_name}</p></CardText>

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
