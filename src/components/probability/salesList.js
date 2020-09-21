import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './sales.css'



export default class SalesList extends Component {

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
                    <h1>Sales</h1>
                    <br></br>

                    {
                        this.props.sales.map(sale =>
                            <div key={sale.id}>

                                    <Card body inverse className="probDriveListCard" style={{ backgroundColor: '#008080', borderColor: '#333' }}>
                                    <CardTitle>
                                        {/* <h2>{driveTicket.drive_name}</h2> */}
                        <CardText><h3>{sale.selectedLead}</h3></CardText>
                        {/* <CardText><h3>{sale.selectedProduct}</h3></CardText> */}
                        

                                        <br></br>
                                    </CardTitle>

                                    <Link to={`/sales/${sale.id}/details`}>
                        <Button className="purchaseDetailsBtn" color="success" size="sm">
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