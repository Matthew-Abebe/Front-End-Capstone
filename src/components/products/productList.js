import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './products.css'



export default class ProductList extends Component {


    
    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    render() {
        console.log(this.props.products)
        return (

            <React.Fragment>

            <div>
                <section className="products">
                    <div className="productsHeader">
                    <h1 className="productsHeader">Products Available</h1>
                </div> 
                    {
                        this.props.products.map(product =>
                            <div key={product.id}>
                <Card body inverse className="productListCard" style={{ backgroundColor: '#0f52ba', borderColor: '#333' }}>
                    <CardTitle><h3>{product.productName}</h3></CardTitle>

                    <br></br>

                    <Link to={`/products/${product.id}/details`}>
                        <Button className="productDetailsBtn" color="success" size="sm">Details</Button>
                        </Link>
                        </Card>
                            </div>
                        )}
                    <Link to={`/products/new`}>
                        <Button className="addNewProductButton" color="success">Create a New Product</Button>
                        </Link>
                </section>
            </div>

        </React.Fragment>
    )
}
}
