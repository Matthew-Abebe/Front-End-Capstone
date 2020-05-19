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
                    <h2>Products</h2>
                    {
                        this.props.products.map(product =>
                            <div key={product.id}>

                                <Card body inverse color="secondary">
                                    <CardTitle  tag="a" href={`/products/${product.id}/details`}>
                                        <h2>{product.product_name}</h2>
                                        <h4>${product.sale_price}</h4>
                                        <br></br>

                        <Link to="/products">
                        <Button className="buyProductBtn" color="success" size="lg" block onClick={() =>
                        this.props.addPurchase({product})} className="sellProductBtn">
                            Buy
                            </Button>
                            </Link>
                                    </CardTitle>
                                </Card>

                            </div>

                        )}
                </section>
            </div>


            <div>
                <Card body inverse color="danger">
                    <CardTitle>
                <p><i>Order Custom Product</i></p>
                </CardTitle>
                <Link to="/products/new">
                    <button>Start</button>
                </Link>
                </Card>
            </div>

        </React.Fragment>
    )
}
}
