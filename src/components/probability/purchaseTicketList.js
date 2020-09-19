import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './probabilityDrive.css'



export default class PurchaseTicketList extends Component {

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
                    <h1>Purchase Tickets</h1>
                    <br></br>

                    {
                        this.props.purchaseTickets.map(purchaseTicket =>
                            <div key={purchaseTicket.id}>

                                    <Card body inverse className="probDriveListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardTitle>
                                        {/* <h2>{driveTicket.drive_name}</h2> */}
                        <CardText><h3>{purchaseTicket.selectedPurchase}</h3>
                        </CardText>

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