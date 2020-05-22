import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
// import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

import './probabilityDriveTicket.css'


export default class ProbabilityDriveTicket extends Component {



    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.constructNewDriveTicket = this.constructNewDriveTicket.bind(this);
    //     // this.handleProbabilityDrive = this.handleProbabilityDrive.bind(this);
    //     // this.state = { counter: 0 };
    //     // this.handleClick = this.handleClick.bind(this);
    //   }

    state = {

        location_name: "",
        drive_name: "",
        userId: ""
    }

      constructNewDriveTicket = evt => {

        let userId = sessionStorage.getItem("userId")

        const newDriveTicket = {
            location_name: this.state.location_name,
            drive_name: this.state.drive_name,
            userId: parseInt(userId)
        }

        console.log(newDriveTicket)

        this.props.addDriveTickets(newDriveTicket)
            .then(() => this.props.history.push("/probabilityDriveTickets"))
    }

      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        // console.log(stateToChange)
        this.setState(stateToChange)
    }

    // handleDriveTicketClick = evt => {
    //     const stateToChange = {};
    //     stateToChange[evt.target.id] = evt.target.value
    //     console.log(stateToChange)
    //     this.setState(stateToChange)

    // }
    

    handleProbabilityDrive = (evt) => {

        let randomNumber = Math.floor(Math.random() * 4)
        let outcome = ''

        switch (randomNumber) {
            case 0:
                outcome = `Congratulations, ${this.state.drive_name}. You have arrived at ${this.state.location_name} as a sperm whale! ...Awaiting normalization.`;
                break;
            case 1:
                outcome = `Congratulations, ${this.state.drive_name}. You have arrived at ${this.state.location_name} as a bowl of petunias! ...Awaiting normalization.`;
                break;
            case 2:
                outcome = `Congratulations, ${this.state.drive_name}. You have arrived at ${this.state.location_name} made out of yarn! ...Awaiting normalization.`;
                break;
            case 3:
                outcome = `Congratulations, ${this.state.drive_name}. You have arrived at ${this.state.location_name} as a sofa! ...Awaiting normalization.`;
                break;
        }

        alert(`${outcome}`);
    }

    // updateDriveTicket = evt => {
    //     evt.preventDefault()

    //     const editedTicket = {
    //         id: this.props.match.params.productId,
    //         product_name: this.state.product_name,
    //         sale_price: this.state.sale_price,
    //         description: this.state.description
    //     }

    //     console.log(editedTicket)
    //     this.props.putProduct(editedProduct)
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

                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="drive_name"
                            placeholder="Name"
                        />
                    </div>

                <form className="form-group">
                    <div className="form-group">
                        <label htmlFor="Location">Location</label>
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
 

                    {/* <div className="form-group">
                        <label htmlFor="Passengers">Drive Pass</label>
                        <input
                            type="text"
                            value={this.state.value}
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="passenger_names"
                            placeholder="Enter passenger names"
                        />
                    </div> */}

        

                    <Button className="driveBtn" color="success" sz="lg"
            onClick={this.handleProbabilityDrive}
            >Engage Infinite Probability Drive!</Button>
                    

            <br></br>

<div>
            <Card body inverse style ={{ backgroundColor: '#333', borderColor: '#333' }}>
        {/* <CardImg className="probDriveGif" top width="100%" src="https://i.gifer.com/DUR5.gif" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>
              <h2>Your Drive Tickets</h2></CardTitle>
          {/* <Link to="/probabilityDriveTicket">
          <Button color="danger"
          onClick={this.props.addDriveTickets}>Start</Button>
          </Link> */}
          <CardText>
                <h2>Drive Details
                    </h2></CardText>

            <CardSubtitle>
            <p>Name: {this.state.drive_name}</p>
                </CardSubtitle>
            <CardSubtitle>
            <p>Location: {this.state.location_name}</p>
                </CardSubtitle>
            <CardSubtitle>
            {/* <p>Timestamp: {dateTim}</p> */}
                </CardSubtitle>

                <br></br>
               
        </CardBody>
      </Card>
      </div>

{/* <Button className="driveBtn" color="primary" sz="lg"
            onClick={this.handleClick}
            >Generate Your Drive Ticket!</Button> */}


                      </form> 

  );
};


            </React.Fragment>
        )
    }}

