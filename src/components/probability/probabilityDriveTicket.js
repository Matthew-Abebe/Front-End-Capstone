import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
// import { Card, Button, CardTitle } from 'reactstrap';
import { Button} from 'reactstrap';
// import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

import './probabilityDriveTicket.css'


export default class ProbabilityDriveTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleProbabilityDrive = this.handleProbabilityDrive.bind(this);
      }

      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    

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

                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="locationName">Location</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location_name"
                            placeholder="Location"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Confirm Drive User</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="confirmDriver"
                            placeholder="Username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Drive Pass">Drive Pass</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="drivePass"
                            placeholder="Drive Password"
                        />
                    </div>

                      </form> 

                      
                {<div>
                    <Button className="driveBtn" color="success" sz="lg"
                        onClick={this.handleProbabilityDrive}
                    >Engage Infinite Probability Drive!</Button>
                </div> }

                <div className="form-group">
                        <label htmlFor="salePrice">Sale Price</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sale_price"
                            placeholder="Sale Price"
                        />
                    </div>

            </React.Fragment>
        )
    }}


        
    
