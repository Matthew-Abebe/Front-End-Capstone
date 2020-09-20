import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './product.css'



export default class LeadList extends Component {


    
    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    render() {
        console.log(this.props.leads)
        return (


            <React.Fragment>

            <div>
                <section className="products">
                    <div className="productsHeader">
                    <h1>Leads</h1>
                    </div>

                    <br></br>
                    
                    {
                        this.props.leads.map(lead =>
                            <div key={lead.id}>

                                <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    {/* put card title detail link into a button*/}
                                    {/* <CardTitle  tag="a" href={`/products/${product.id}/details`}> */}
                                    <CardTitle><h3>{lead.first_name} {lead.last_name}</h3></CardTitle>
                                       {/* <CardText> <p>Email: {product.email_address}</p></CardText> */}
                                       {/* <CardText><p>Phone: {product.phone_number}</p></CardText> */}
                                       {/* <CardText><p>Address: {product.lead_address}</p></CardText> */}
                                        <br></br>


                        <Link to="/products">
                        <Button color="success" size="sm" onClick={() =>
                        this.props.addPurchase({lead})} className="sellProductBtn">
                            Purchase
                            </Button>
                        
                        <Link to={`/leads/${lead.id}/details`}>
                        <Button className="productDetailsBtn" color="success" size="sm">
                            Details
                        </Button>
                        </Link>

                        {/* <Link to={`/products/${this.state.productId}`}>
                        <button onClick={() =>
                            this.props.deleteProduct(this.state.productId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link> */}

                            </Link>
                                    {/* </CardTitle> */}
                                </Card>

                            </div>


                        )}
<br></br>
                        <Link to={`/products/new`}>
                        <Button className="addNewProduct" color="success" size="sm">
                            Create a New Lead
                        </Button>
                        </Link>

                </section>
            </div>

        </React.Fragment>
    )
}
}
