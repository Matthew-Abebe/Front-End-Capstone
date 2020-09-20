import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { ButtonGroup, } from 'reactstrap';

import './purchases.css'

export default class Purchases extends Component {

    state = {
    
        location_name: "",
        drive_name: "",
        ticket_date_time: "",
        leads: [],
        selectedLead: ""
        // userId: ""
    }

    componentDidMount() {
        const remoteURL = "http://localhost:5002"
        // let sessionId = sessionStorage.getItem("userId")
     
      fetch(
        `${remoteURL}/leads`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let leadsFromApi = data.map(lead => {
              return { value: lead.first_name + " " + lead.last_name, display: lead.first_name + " " + lead.last_name };
            });
            this.setState({
              leads: [
                {
                  value: "",
                  display:
                  "(Select your lead)"
                }
              ].concat(leadsFromApi)
            });
            console.log(this.state.leads)
          })
          .catch(error => {
            console.log(error);
          });
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
              <section>
                <h2>Opportunities</h2>
              </section>
            </div>
            <br></br>
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
            {this.state.leads.map(lead => (
              <option
                key={lead.value}
                value={lead.value}
              >
                {lead.display}
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
          
                </div>
              
                </React.Fragment>
            )
        }
    
    }

    // getSpending() {
    //     console.log(this.props.purchases)

    //     let spendingArray = []

    //     let spendingSum = 0;

    //     this.props.purchases.map(purchases => {

    //         spendingArray.push(purchases.productPrice)

    //         console.log(spendingArray)

    //         for (let i = 0; i < spendingArray.length; i++) {

    //             spendingSum += spendingArray
    //         }

    //         console.log(spendingArray.reduce(function (a, b) {
    //             return parseFloat(a) + parseFloat(b);
    //         }, 0)
    //         )
    //         console.log(spendingArray)
    //     })
    // }

//     render() {
//         return (
//             <React.Fragment>
//                 <section className="products">
//                     <div className="purchasesHeader">
//                     <h1>Opportunities</h1>
//                     </div>
                    
//                     <br></br>
                    
//                     {
//                         this.props.purchases.map(purchase =>
//                             <div key={purchase.id}>

//                         <Card body inverse className="purchaseListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>

//                                     <CardTitle>
//                                         <h3>{purchase.productName}</h3>
//                                     </CardTitle>
//                                     <CardText>
//                                         <p>Purchased {purchase.dateTime}</p>
//                                     </CardText>
//                                     {/* <br></br> */}
//                         <CardBody>
//                            </CardBody>
//                                     <Button color="success" size="sm" onClick={() =>
//                                         this.props.deletePurchase(purchase.id)} className="deleteSaleBtn">Delete
//                                         </Button>
//                                 </Card>
//                             </div>
//                         )
//                     }
//                 </section>

//                 {/* <section>
//                     <button onClick={() => this.getSpending()}>Spending</button>
//                 </section> */}

//             </React.Fragment>


//         )
//     }
// }
