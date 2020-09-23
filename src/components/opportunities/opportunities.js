import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { ButtonGroup, } from 'reactstrap';

import './purchases.css'

export default class Opportunities extends Component {

    state = {
        userId: [],
        products: [],
        leads: [],
        sales: [],
        selectedProduct: "",
        selectedProductPrice: "",
        selectedLead: "",
        dateTime: ""
    }

    getTimeStamp() {
      var now = new Date();
      return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear());
  }

    componentDidMount() {
        const remoteURL = "http://localhost:5002"
        let sessionId = sessionStorage.getItem("userId")
     
      fetch(
        `${remoteURL}/leads?userId=${sessionId}`
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

          fetch(
            `${remoteURL}/products?userId=${sessionId}`
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              let productsFromApi = data.map(product => {
                  return { value: product.product_name, display: product.product_name };
                });
                this.setState({
                  products: [
                    {
                      value: "",
                      display:
                      "(Select your product)"
                    }
                  ].concat(productsFromApi)
                });
                console.log(this.state.products)
              })
              .catch(error => {
                console.log(error);
              });
        }
        
        constructNewSale = (evt) => {
          
          let userId = sessionStorage.getItem("userId")
          
          const newSale = {
            id: this.props.match.params.saleId,
            userId: parseInt(userId),
            selectedLead: this.state.selectedLead,
            selectedProduct: this.state.selectedProduct,
            // selectedProductPrice: this.state.product_price,
            dateTime: this.getTimeStamp()
          }
          
          console.log(newSale)
        this.props.addSales(newSale)
        .then(() => this.props.history.push("/sales"))
      }
      
    render() {
      // console.log(this.state.selectedPurchase)
        return (
          
          
          <React.Fragment>
            <div>
              <section>
                <h1>Opportunities</h1>
              </section>
            </div>
            <br></br>
        <div>
          <select
            value={this.state.selectedLead}
            onChange={e =>
              this.setState({
                selectedLead: e.target.value,
                validationError:
                  e.target.value === ""
                    ? "You must select a lead"
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

                <div>
            </div>
            <br></br>
        <div>
          <select
            value={this.state.selectedProduct}
            onChange={e =>
              this.setState({
                selectedProduct: e.target.value,
                validationError:
                  e.target.value === ""
                    ? "You must select a product"
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
                    
       
          
          <div className="driveButton">
          <Button type="submit" color="success" className="driveBtn"
                onClick={() => {
                    this.constructNewSale() 
                }}>Enter Details
            </Button>
            </div>
    
             {/* <div className="previousDriveTicketsButton">  
            <Link to="/sales">
                <Button type="submit" color="danger" className="previousDriveTicketsBtn"
                    onClick={() => {
                    console.log("this will take user to sales list")
                }}>Go to Sales
                    </Button>
                </Link>
                </div>  */}
          
                </div>
              
                </React.Fragment>
            )
        }
    
    }
