import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';
// import { ButtonGroup, } from 'reactstrap';

import './purchases.css'

export default class Purchases extends Component {

    // state = {

    // }

    // getSpending() {
    //     console.log(this.props.purchases)

    //     let spendingArray = []

    //     let spendingSum = 0;

    //     this.props.purchases.map(purchases => {

    //         spendingArray.push(purchases.productPrice)

    //         console.log(spendingArray)

    //         for (let i = 0; i < spendingArray.length; i++) {

    //             spendingSum += spendingArray
    //         }

    //         console.log(spendingArray.reduce(function (a, b) {
    //             return parseFloat(a) + parseFloat(b);
    //         }, 0)
    //         )
    //         console.log(spendingArray)
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <section className="products">
                    <div className="purchasesHeader">
                    <h1>Opportunities</h1>
                    </div>
                    
                    <br></br>
                    
                    {
                        this.props.purchases.map(purchase =>
                            <div key={purchase.id}>

                        <Card body inverse className="purchaseListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>

                                    <CardTitle>
                                        <h3>{purchase.productName}</h3>
                                    </CardTitle>
                                    <CardText>
                                        <p>Purchased {purchase.dateTime}</p>
                                    </CardText>
                                    {/* <br></br> */}
                        <CardBody>
                           </CardBody>
                                    <Button color="success" size="sm" onClick={() =>
                                        this.props.deletePurchase(purchase.id)} className="deleteSaleBtn">Delete
                                        </Button>
                                </Card>
                            </div>
                        )
                    }
                </section>

                {/* <section>
                    <button onClick={() => this.getSpending()}>Spending</button>
                </section> */}

            </React.Fragment>


        )
    }
}
