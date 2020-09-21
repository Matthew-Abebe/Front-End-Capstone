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
                    <h1>Products</h1>
                </div>

                    <br></br>
                    
                    {
                        this.props.products.map(product =>
                            <div key={product.id}>

                <Card body inverse className="productListCard" style={{ backgroundColor: '#008080', borderColor: '#333' }}>
                    <CardTitle><h3>{product.product_name}</h3></CardTitle>

                    <br></br>

                    <Link to={`/products/${product.id}/details`}>
                        <Button className="productDetailsBtn" color="success" size="sm">Details</Button>
                        </Link>
                        </Card>
                            </div>
                        )}

                    <br></br>

                    <Link to={`/products/new`}>
                        <Button className="addNewProduct" color="success" size="lg">Create a New Product</Button>
                        </Link>
                </section>
            </div>

        </React.Fragment>
    )
}
}
