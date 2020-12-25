import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, Button, } from 'reactstrap';
// import { Button } from 'reactstrap';

import './probabilityDrive.css'


export default class SalesDetails extends Component {

    state = {
        saleId: "",
        selectedLead: "",
        selectedProduct: "",
    }

    componentDidMount() {
        DbCalls.getSale(this.props.match.params.saleId)
            .then(sale => {
                console.log(sale)
                this.setState({
                    saleId: sale.id,
                    selectedLead: sale.selectedLead,
                    selectedProduct: sale.selectedProduct,
                })
                console.log(this.state.saleId)
            }
            )
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
                            <p>Name: {this.state.selectedLead}</p>
                            <p>Product: {this.state.selectedProduct}</p>
                        </CardTitle>
                        
                        {/* <CardText>
                            <p>Location: {this.state.driveLocation}</p>
                            <p>Time {this.state.driveTicketDateTime}</p>
                        </CardText> */}

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

                        <Link to={`/sales/${this.state.saleId}/edit`}>
                            <Button color="success" size="sm" className="editUserDriveTicketBtn">Edit</Button>
                        </Link>
                        
                        <Link to="/sales">
                        <Button color="success" size="sm" onClick={() =>
                                        this.props.deleteSale(this.state.saleId)} className="deleteUserDriveTicketBtn">
                                        Delete
                                </Button>
                                </Link>
                    </CardBody>
                </Card>
            </div>

        
      
        
        </React.Fragment>
        )
    }
}