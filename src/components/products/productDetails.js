import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ButtonGroup, ButtonToolbar } from 'reactstrap';

import './productDetails.css'


export default class ProductDetails extends Component {

    state = {
        productName: "",
        salePrice: "",
        description: ""
    }

    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.productId)
            .then(product => {
                console.log(product)
                this.setState({
                    productId: product.id,
                    productName: product.product_name,
                    salePrice: product.sale_price,
                    description: product.description
                })
                console.log(this.state.productId)
            }
            )
    }

    render() {
        // console.log(product.id)
        return (
            <div>
                <Card body inverse color="info">
                    {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                    <CardBody>
                        <CardTitle>
                            <h2>{this.state.productName}</h2>
                        </CardTitle>
                        
                        <CardText>
                            <p>Description: {this.state.description}</p>
                        </CardText>

                        <ButtonGroup>
                        <Link to={`/products/${this.state.productId}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to="/products">
                        <button onClick={() =>
                            this.props.deleteProduct(this.state.productId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link>
                            </ButtonGroup>
                        {/* <Button>Hi</Button> */}
                    </CardBody>
                </Card>
            </div>

        )
    }
}
