import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';

import './productDetails.css'


export default class ProductDetails extends Component {

    state = {
        productName: "",
        userProductName: "",
        salePrice: "",
        userProductSalePrice: "",
        description: "",
        userProductDescription: ""
    };

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

        DbCalls.getUserProducts(this.props.match.params.userProductId)
            .then(userProduct => {
                console.log(userProduct)
                this.setState({
                    userProductId: userProduct.id,
                    userProductName: userProduct.user_product_name,
                    userProductSalePrice: userProduct.user_product_sales_price,
                    userProductDescription: userProduct.user_product_description
                })
                console.log(this.state.userProductId)
            })
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
                            <p>Description: {this.state.description}</p>
                        </CardText>

                        {/* <ButtonGroup>
                        <Link to={`/userProducts/${this.state.userProductId}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/userProducts/${this.state.userProductId}`}>
                        <button onClick={() =>
                            this.props.deleteUserProduct(this.state.userProductId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link>
                            </ButtonGroup> */}
                        {/* <Button>Hi</Button> */}
                    </CardBody>
                </Card>
            </div>

        )
    }
}
