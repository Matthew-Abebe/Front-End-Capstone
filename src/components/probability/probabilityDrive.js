import React, { Component } from 'react'
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
        ticket_date_time: "",
        purchases: [],
        selectedPurchase: ""
        // userId: ""
    }

    componentDidMount() {
        const remoteURL = "http://localhost:5002"
        let sessionId = sessionStorage.getItem("userId")
     
      fetch(
        `${remoteURL}/purchases?userId=${sessionId}`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let purchasesFromApi = data.map(purchase => {
              return { value: purchase.productName, display: purchase.productName };
            });
            this.setState({
                purchases: [
                    {
                        value: "",
                        display:
                        "(Select your purchase)"
                    }
                ].concat(purchasesFromApi)
            });
            console.log(this.state.purchases)
        })
        .catch(error => {
          console.log(error);
        });
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
    
    getTicketTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear() + " " + now.getHours() + ":"
        + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ":" + ((now.getSeconds() < 10) ? ("0" + now
            .getSeconds()) : (now.getSeconds())));
    }
    
    //Construct new drive ticket function
    
    constructNewDriveTicket = (evt) => {
    
        let userId = sessionStorage.getItem("userId")
    
        const newDriveTicket = {
            id: this.props.match.params.driveTicketId,
            location_name: this.state.location_name,
            drive_name: this.state.drive_name,
            userId: parseInt(userId),
            ticket_date_time: this.getTicketTimeStamp()
        }
        
        console.log(newDriveTicket) //newDriveTicket is missing its id
        
        this.props.addDriveTickets(newDriveTicket)
        .then(() => this.props.history.push("/probabilityDriveTickets"))
        
        // console.log(`${newDriveTicket.drive_name}. You have a new drive ticket for your trip to ${newDriveTicket.location_name}!`)
        
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
          <select
            value={this.state.selectedPurchase}
            onChange={e =>
              this.setState({
                selectedPurchase: e.target.value,
                validationError:
                  e.target.value === ""
                    ? "You must select your favourite team"
                    : ""
              })
            }
          >
            {this.state.purchases.map(purchase => (
              <option
                key={purchase.value}
                value={purchase.value}
              >
                {purchase.display}
              </option>
            ))}
          </select>
          <div
            style={{
              color: "red",
              marginTop: "5px"
            }}
          >
            {this.state.validationError}
          </div>
        </div>
    
        
                
                <div>
                    <Jumbotron fluid className="jumbotron">
                        <Container fluid>
                            <h1 className="display-3">Drive Through The Galaxy </h1>
                            <p className="lead">A wonderful new method of crossing interstellar distances.</p>
                        </Container>
                        </Jumbotron>
    
        <Form>
          <FormGroup>
            <Input type="text" 
             value={this.state.value}
             required
             className="driveName" 
             onChange={this.handleFieldChange}
             id="drive_name" 
             placeholder="Enter Name" />
    
            <Input type="text"
             value={this.state.value}
             required
             className="location"
             onChange={this.handleFieldChange}
             id="location_name" 
             placeholder="Enter Destination" />
          
          </FormGroup>
          
          <div className="driveButton">
          <Button type="submit" color="success" className="driveBtn"
                onClick={() => {
    
                    this.handleProbabilityDrive()
                    this.constructNewDriveTicket() 
                }}>Start Journey
            </Button>
            </div>
    
             <div className="previousDriveTicketsButton">  
            <Link to="/probabilityDriveTickets">
                <Button type="submit" color="danger" className="previousDriveTicketsBtn"
                    onClick={() => {
                    console.log("this will take user to prob drive list")
                }}>See Previous Trips
                    </Button>
                </Link>
                </div> 
          
        </Form>
                </div>
              
                </React.Fragment>
            )
        }
    
    }