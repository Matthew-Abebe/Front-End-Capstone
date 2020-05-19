import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Card, CardText,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup, } from 'reactstrap';

export default class Purchases extends Component {

    state = {

    }

    getSpending() {


        console.log(this.props.purchases)

        let spendingArray = []

        // let spendingSum = 0;

        this.props.purchases.map(purchases => {

            spendingArray.push(purchases.productPrice)

            console.log(spendingArray)

            // for (let i = 0; i < spendingArray.length; i++) {

            //     spendingSum += spendingArray
            // }

            console.log(spendingArray.reduce(function (a, b) {
                return parseFloat(a) + parseFloat(b);
            }, 0)
            )
            console.log(spendingArray)
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="products">
                    <h2>All Purchases</h2>
                    {
                        this.props.purchases.map(purchase =>
                            <div key={purchase.id}>

                                <Card body inverse color="success">
                                    <CardTitle>
                                        <h2>{purchase.productName}</h2>
                                    </CardTitle>

                                    {/* <h3>{purchase.productId}</h3> */}
                                    <CardText>
                                        <p>Purchased: {purchase.dateTime}</p>
                                    </CardText>

                                <ButtonGroup sz="large">

                                    {/* <Link to={`/purchases/${purchase.id}/edit`}>
                                        <button>Edit</button>
                                    </Link> */}


                                    <button onClick={() =>
                                        this.props.deletePurchase(purchase.id)} className="deleteSaleBtn">
                                        Delete
                                </button>

                                </ButtonGroup>



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
