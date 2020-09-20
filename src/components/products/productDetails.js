import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Button, Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';

import './productDetails.css'


export default class ProductDetails extends Component {

    state = {
        productId: "",
        product_name: "",
        product_price: "",
        product_vendor: "",
        product_description: ""
    };

    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.productId)
            .then(product => {
                console.log(product)
                this.setState({
                    productId: product.id,
                    product_name: product.product_name,
                    product_price: product.product_price,
                    product_vendor: product.product_vendor,
                    product_description: product.product_description
                })
                console.log(this.state.productId)
            }
            )

        // DbCalls.getUserProducts(this.props.match.params.userProductId)
        //     .then(userProduct => {
        //         console.log(userProduct)
        //         this.setState({
        //             userProductId: userProduct.id,
        //             userProductName: userProduct.user_product_name,
        //             userProductSalePrice: userProduct.user_product_sales_price,
        //             userProductDescription: userProduct.user_product_description
        //         })
        //         console.log(this.state.userProductId)
        //     })
    }

    render() {
        // console.log(product.id)
        return (
            <div>
                <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                    <CardBody>
                        <CardTitle>
                            <h2>{this.state.product_name}</h2>
                        </CardTitle>
                        <CardText>
                            <p>Price: {this.state.product_price}</p>
                        </CardText>
                        <CardText>
                            <p>Vendor: {this.state.product_vendor}</p>
                        </CardText>
                        <CardText>
                            <p>Description: {this.state.product_description}</p>
                        </CardText>

                        <ButtonGroup>
                        <Link to={`/products/${this.state.productId}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/products`}>
                        <button onClick={() =>
                            this.props.deleteProduct(this.state.productId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link>
                            </ButtonGroup> 
                    </CardBody>
                </Card>
            </div>

        )
    }
}
