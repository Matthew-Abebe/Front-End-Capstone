import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle } from 'reactstrap';

import './product.css'



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
                    <h1>Products</h1>

                    <br></br>
                    
                    {
                        this.props.products.map(product =>
                            <div key={product.id}>

                                <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    {/* put card title detail link into a button*/}
                                    {/* <CardTitle  tag="a" href={`/products/${product.id}/details`}> */}
                                        <h4>{product.product_name}</h4>
                                        <p>Price ~ ${product.sale_price}</p>
                                        <br></br>


                        <Link to="/products">
                        <Button className="buyProductBtn" color="success" size="sm" onClick={() =>
                        this.props.addPurchase({product})} className="sellProductBtn">
                            Purchase
                            </Button>
                        
                        <Link to={`/products/${product.id}/details`}>
                        <Button className="productDetailsBtn" color="success" size="sm">
                            Details
                        </Button>
                        </Link>

                            </Link>
                                    {/* </CardTitle> */}
                                </Card>

                            </div>

                        )}
                </section>
            </div>

        </React.Fragment>
    )
}
}
