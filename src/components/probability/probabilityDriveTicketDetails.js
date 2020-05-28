import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, Button, } from 'reactstrap';
// import { Button } from 'reactstrap';

import './probabilityDrive.css'


export default class ProbabilityDriveTicketDetails extends Component {

    state = {
        driveTicketId: "",
        driverName: "",
        driveLocation: "",
        // description: ""
    }

    componentDidMount() {
        DbCalls.getDriveTicket(this.props.match.params.driveTicketId)
            .then(driveTicket => {
                console.log(driveTicket)
                this.setState({
                    driveTicketId: driveTicket.id, //maybe wrong
                    driverName: driveTicket.drive_name,
                    driveLocation: driveTicket.location_name,
                    // description: product.description
                })
                console.log(this.state.driveTicketId)
            }
            )

            DbCalls.getUserDriveTickets(this.props.match.params.userDriveTicketId)
            .then(userDriveTicket => {
                console.log(userDriveTicket)
                this.setState({
                    userDriveTicketId: userDriveTicket.id,
                    userDriverTicketName: userDriveTicket.drive_name,
                    userDriveTicketLocation: userDriveTicket.location_name
                })
                console.log(this.state.userDriveTicketId)
            })
    }

    render() {
        // console.log(product.id)
        return (
            <React.Fragment>
            <div>

        
                    <Card body inverse className="driveTicketDetailsCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                    <CardBody>
                        <CardTitle>
                            <p>Name: {this.state.driverName}</p>
                        </CardTitle>
                        
                        <CardText>
                            <p>Location: {this.state.driveLocation}</p>
                        </CardText>

                        {/* <ButtonGroup>
                        <Link to={`/products/${this.state.productId}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to="/products">
                        <button onClick={() =>
                            this.props.deleteProduct(this.state.productId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link>
                            </ButtonGroup> */}
                        {/* <Button>Hi</Button> */}

                        <Link to={`/probabilityDriveTickets/${this.state.driveTicketId}/edit`}>
                            <Button color="success" size="sm" className="editUserDriveTicketBtn">Edit</Button>
                        </Link>
                        
                        <Link to="/probabilityDriveTickets">
                        <Button color="success" size="sm" onClick={() =>
                                        this.props.deleteDriveTicket(this.state.driveTicketId)} className="deleteUserDriveTicketBtn">
                                        Delete
                                </Button>
                                </Link>
                    </CardBody>
                </Card>
            </div>

        }
      
        
        </React.Fragment>
        )
    }
}