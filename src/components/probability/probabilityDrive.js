import React, { Component } from 'react'
import { Spinner, ButtonGroup } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

import './probabilityDrive.css'

export default class ProbabilityDrive extends Component {

state = {

    location_name: "",
    drive_name: "",
    // userId: ""
}

// handleClick = (e) => {
//     e.preventDefault()
//     console.log("clicked link")
// }

handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    console.log(stateToChange)
    this.setState(stateToChange)
}

//Construct new drive ticket function

constructNewDriveTicket = (evt) => {

    let userId = sessionStorage.getItem("userId")

    const newDriveTicket = {
        id: this.props.match.params.driveTicketId,
        location_name: this.state.location_name,
        drive_name: this.state.drive_name,
        userId: parseInt(userId)
    }
    
    console.log(newDriveTicket) //newDriveTicket is missing its id
    
    this.props.addDriveTickets(newDriveTicket)
    .then(() => this.props.history.push("/probabilityDriveTickets"))
    
    console.log(`Hi ${newDriveTicket.drive_name}. You have a new drive ticket for your trip to ${newDriveTicket.location_name}!`)
    
}

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

                    <Form>
      
      <FormGroup>
        
        <Label for="driveName">Drive Name</Label>
        <Input type="text" 
         value={this.state.value}
         required
         name="driveName" 
         onChange={this.handleFieldChange}
         id="drive_name" 
         placeholder="Enter Name" />

        <Label for="location">Location</Label>
        <Input type="text"
         value={this.state.value}
         required
         name="location"
         onChange={this.handleFieldChange}
         id="location_name" 
         placeholder="Enter Destination" />
      
      </FormGroup>
      
      <div>

      <Button className="driveBtn" color="success" sz="lg"
            onClick={() => {

                this.handleProbabilityDrive()
                this.constructNewDriveTicket() 
            }
                }>
            Engage Infinite Probability Drive!
            </Button>

            </div>
            
            <div>
            <Link to="/probabilityDriveTickets">
            <Button className="driveTicketBtn" color="danger" sz="lg"
            onClick={() => {
                // this.constructNewDriveTicket()
                // this.props.addDriveTicket({driveTicket})
                console.log("this will take user to prob drive list")
            }
                }>
            See previous trips!</Button>
            </Link>
            </div>



      
    </Form>

    </Jumbotron>
                </div>
          
            </React.Fragment>
        )
    }

}
