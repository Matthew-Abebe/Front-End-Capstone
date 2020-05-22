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

    // state = {

    //     location_name: "",
    //     drive_name: "",
    //     userId: ""
    // }

    //   constructNewDriveTicket = evt => {

    //     let userId = sessionStorage.getItem("userId")

    //     const newDriveTicket = {
    //         location_name: this.state.location_name,
    //         drive_name: this.state.drive_name,
    //         userId: parseInt(userId)
    //     }

    //     console.log(newDriveTicket)

    //     this.props.addDriveTickets(newDriveTicket)
    //         .then(() => this.props.history.push("/probabilityDriveTickets"))
    // }

      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    // handleDriveTicketClick = evt => {
    //     const stateToChange = {};
    //     stateToChange[evt.target.id] = evt.target.value
    //     console.log(stateToChange)
    //     this.setState(stateToChange)

    // }
    

    

    render() {
        return (
            <React.Fragment>

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

            {/* <CardSubtitle>
            <p>Name: {this.state.drive_name}</p>
                </CardSubtitle>
            <CardSubtitle>
            <p>Location: {this.state.location_name}</p>
                </CardSubtitle>
            <CardSubtitle>
            {/* <p>Timestamp: {dateTim}</p> */}
                {/* </CardSubtitle> */} */}

                <br></br>
               
        </CardBody>
      </Card>
      </div>

{/* <Button className="driveBtn" color="primary" sz="lg"
            onClick={this.handleClick}
            >Generate Your Drive Ticket!</Button> */}



  );
};


            </React.Fragment>
        )
    }}

