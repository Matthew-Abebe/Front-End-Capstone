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
        products: [],
        selectedPurchase: ""
        // userId: ""
    }

    componentDidMount() {
        const remoteURL = "http://localhost:5002"
        // let sessionId = sessionStorage.getItem("userId")
     
      fetch(
        `${remoteURL}/products`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let productsFromApi = data.map(product => {
              return { value: product.first_name + " " + product.last_name, display: product.first_name + " " + product.last_name };
            });
            this.setState({
                products: [
                    {
                        value: "",
                        display:
                        "(Select your lead)"
                    }
                ].concat(productsFromApi)
            });
            console.log(this.state.products)
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
   

    constructNewPurchaseTicket = (evt) => {

        let userId = sessionStorage.getItem("userId")

        const newPurchaseTicket = {
            id: this.props.match.params.purchaseTicketId,
            userId: parseInt(userId),
            selectedPurchase: this.state.selectedPurchase
        }

        console.log(newPurchaseTicket)
        this.props.addPurchaseTickets(newPurchaseTicket)
        .then(() => this.props.history.push("/purchaseTickets"))
    }
    
    
    render() {
        // console.log(this.state.selectedPurchase)
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
            {this.state.products.map(product => (
              <option
                key={product.value}
                value={product.value}
              >
                {product.display}
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
    
                    // this.handleProbabilityDrive()
                    // this.constructNewDriveTicket()
                    this.constructNewPurchaseTicket() 
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