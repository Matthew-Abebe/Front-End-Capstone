import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Card, Button, CardTitle } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'


import './probability.css'


export default class ProbabilityDrive extends Component {

    handleProbabilityDrive = (evt) => {

        let randomNumber = Math.floor(Math.random() * 7)
        let outcome = ''

        switch (randomNumber) {
            case 0:
                outcome = 'Congratulations, you are a sperm whale! ...Awaiting normalization.';
                break;
            case 1:
                outcome = 'Congratulations, you are a bowl of petunias! ...Awaiting normalization.';
                break;
            case 2:
                outcome = 'Congratulations, you are made of yarn! ...Awaiting normalization';
                break;
            case 3:
                outcome = 'Congratulations, you are a rubber duck! ...Awaiting normalization';
                break;
            case 4:
                outcome = 'Congratulations, you are a sofa! ...Awaiting normalization'
                break;
            case 5:
                outcome = 'Congratulations, you are an anvil! ...Awaiting normalization';
                break;
            case 6:
                outcome = 'Congratulations, you are a wooden log! ...Awaiting normalization';
                break;
        }
        alert(`${outcome}`);
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // constructNewProduct = evt => {

    //     let userId = sessionStorage.getItem("userId")

    //     const newProduct = {
    //         product_name: this.state.product_name,
    //         sale_price: this.state.sale_price,
    //         description: this.state.description,
    //         userId: parseInt(userId)
    //     }

    //     console.log(newProduct)

    //     this.props.addProducts(newProduct)
    //         .then(() => this.props.history.push("/products"))
    // }

    render() {
        return (
            <React.Fragment>

                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div>

                <div>
                    <Jumbotron fluid className="jumbotron">
                        <Container fluid>
                            <h1 className="display-3">Drive Through The Galaxy </h1>
                            <p className="lead">A faster-than-light drive used on spacecraft.</p>
                        </Container>
                    </Jumbotron>
                </div>

                <br></br>
{/* 
                <form className="productForm">
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="product_name"
                            placeholder="Product Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="salePrice">Sale Price</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sale_price"
                            placeholder="Sale Price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="Description"
                        />
                    </div>
                      </form> */}

                <div>
                    <Button className="driveBtn" color="success" sz="lg"
                        onClick={this.handleProbabilityDrive}
                    >Engage Infinite Probability Drive!</Button>
                </div>

                <div>
                <Card body inverse color="danger">
                    <CardTitle>
                <p><i>Generate Drive Ticket</i></p>
                </CardTitle>
                <Link to="/probabilityDriveTicket">
                    <button className="driveTicketBtn"
                    onClick={this.constructNewProduct}>Start</button>
                </Link>
                </Card>
            </div>
          

            </React.Fragment>
        )
    }

}
