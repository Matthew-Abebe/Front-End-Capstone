import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle } from 'reactstrap';

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
                    {
                        this.props.driveTickets.map(driveTicket =>
                            <div key={driveTicket.id}>

                                <Card body inverse color="secondary">
                                    <CardTitle  tag="a" 
<<<<<<< HEAD
                                    href={`/probabilityDriveTickets/${driveTicket.id}/details`}>
                                        <h2>Name: {driveTicket.drive_name}</h2>
                                        <h2>Location: {driveTicket.location_name}</h2>

=======
                                    href={`/probabilityDriveTickets/${driveTicket.id}/details`}
                                    >
                                        <h2>Name: {driveTicket.drive_name}</h2>
                                        <h2>Location: {driveTicket.location_name}</h2>

                                        {/* <button onClick={() =>
                                        this.props.deleteDriveTicket(driveTicket.id)} className="deleteUserDriveTicketBtn">
                                        Delete
                                </button> */}
>>>>>>> deb389a2b1c683ec2349f048aef10e047bc73875
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
