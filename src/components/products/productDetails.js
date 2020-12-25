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
        productName: "",
        productPrice: "",
        productVendor: "",
        productDescription: ""
    };

    componentDidMount() {
        DbCalls.getProduct(this.props.match.params.productId)
            .then(product => {
                console.log(product)
                this.setState({
                    productId: product.id,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productVendor: product.productVendor,
                    productDescription: product.productDescription
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
                            <h2>{this.state.productName}</h2>
                        </CardTitle>
                        <CardText>
                            <p>Price: {this.state.productPrice}</p>
                            <p>Vendor: {this.state.productVendor}</p>
                            <p>Description: {this.state.productDescription}</p>
                        </CardText>

                     
                        <Link to={`/products/${this.state.productId}/edit`}>
                            <Button color="success" size="sm" className="editProductBtn">Edit</Button>
                        </Link>
                        <Link to={`/products`}>
                        <Button color="success" size="sm" className="deleteProductBtn" onClick={() =>
                            this.props.deleteProduct(this.state.productId)} className="deleteProductBtn">
                            Delete
                            </Button>
                            </Link>
                         
                    </CardBody>
                </Card>
            </div>

        )
    }
}
