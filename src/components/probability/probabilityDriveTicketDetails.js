import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';

import './probabilityDrive.css'


export default class ProbabilityDriveTicketDetails extends Component {

    state = {
        driverName: "",
        driveLocation: "",
        // description: ""
    }

    componentDidMount() {
        DbCalls.getDriveTicket(this.props.match.params.driveTicketId)
            .then(driveTicket => {
                console.log(driveTicket)
                this.setState({
                    driveTicketId: driveTicket.id,
                    driverName: driveTicket.drive_name,
                    driveLocation: driveTicket.location_name,
                    // description: product.description
                })
                console.log(this.state.driveTicketId)
            }
            )

            DbCalls.getUserDriveTickets(this.props.match.params.driveTicketId)
            .then(driveTicket => {
                console.log(driveTicket)
                this.setState({
                    driveTicketId: driveTicket.id,
                    driverTicketName: driveTicket.drive_name,
                    driveTicketLocation: driveTicket.location_name
                })
                console.log(this.state.driveTicketId)
            })
    }

    render() {
        // console.log(product.id)
        return (
            <React.Fragment>
            <div>

        
                <Card body inverse color="info">
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

                        <button 
                        // onClick={() =>
                                        // this.props.deleteDriveTicket(driveTicket.id)} 
                                        className="deleteUserDriveTicketBtn">
                                        Delete
                                </button>
                    </CardBody>
                </Card>
            </div>

        }
      
        
        </React.Fragment>
        )
    }
}
