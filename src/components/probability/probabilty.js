import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'


import './probability.css'


export default class ProbabilityDrive extends Component {

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

                <div>
      <Card body inverse style ={{ backgroundColor: '#333', borderColor: '#333' }}>
        {/* <CardImg className="probDriveGif" top width="100%" src="https://i.gifer.com/DUR5.gif" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>
              <h2>The Infinite Probablity Drive</h2></CardTitle>
          <Link to="/probabilityDriveTicket">
          <Button color="danger">Start</Button>
          </Link>
               
        </CardBody>
      </Card>
    </div>
                
            
                {/* <Link to="/probabilityDriveTicket">
                    <Button className="driveTicketBtn" color="link"
                    onClick={this.constructNewProduct}>
                    Start</Button>
                </Link> */}
               
            </div>
          
            </React.Fragment>
        )
    }

}
