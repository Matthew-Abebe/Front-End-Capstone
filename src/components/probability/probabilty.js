import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';

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

                <div>
                    <Button className="driveBtn" color="success" sz="lg"
                        onClick={this.handleProbabilityDrive}
                    >Engage Infinite Probability Drive!</Button>
                </div>

            </React.Fragment>
        )
    }

}
