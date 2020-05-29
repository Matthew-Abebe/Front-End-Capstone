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
                    <h1>Drive Tickets</h1>
                    <br></br>

                    {
                        this.props.driveTickets.map(driveTicket =>
                            <div key={driveTicket.id}>

                                    <Card body inverse className="probDriveListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardTitle>
                                        {/* <h2>{driveTicket.drive_name}</h2> */}
                                        <CardText><h3>Arrived at {driveTicket.location_name}!</h3></CardText>

                                        <br></br>
                                    </CardTitle>

                                    <Link to={`/probabilityDriveTickets/${driveTicket.id}/details`}>
                        <Button className="probabilityDriveDetailsBtn" color="success" size="sm">
                            Details
                        </Button>
                        </Link>
                                </Card>

                                </div>

                        )}
                    </section>
                </div>

            </React.Fragment>
        )
    }
}