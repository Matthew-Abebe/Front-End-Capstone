import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardText, CardTitle, CardBody} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { ButtonGroup, } from 'reactstrap';

import './opportunities.css'

export default class Opportunities extends Component {

    state = {
        userId: [],
        products: [],
        leads: [],
        sales: [],
        selectedProduct: "",
        selectedProductPrice: "",
        selectedLead: "",
        saleTime: ""
    }

    getDate() {
      var now = new Date();
      var moment = now.toLocaleString()
      // var moment = now.toString().slice(0, 21)
      // return ((now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear());
      return(moment);
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
                  return { value: product.productName, display: product.productName, selectedProductPrice: product.productPrice };
                });
                this.setState({
                  products: [
                    {
                      value: "",
                      display:
                      "(Select your product)",
                      selectedProductPrice: ""
                    }
                  ].concat(productsFromApi)
                });
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
            selectedProductPrice: this.state.selectedProductPrice,
            saleTime: this.getDate()
          }
          
          console.log(newSale)
        this.props.addSales(newSale)
        .then(() => this.props.history.push("/sales"))
      }
      
    render() {
      console.log(this.state.products)
        return (
          
          
          <React.Fragment>
            <div>
              <section>
                <h1 className="opportunitiesHeader">Opportunities</h1>
              </section>
            </div>

        <div>
          <Input className="selectLeadInput" type="select"
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
          </Input>
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
            <br></br>
        <div>
          <Input className="selectProductInput" type="select"
            value={this.state.selectedProduct}
            selectedProductPrice={this.state.selectedProductPrice}
            onChange={e =>
              this.setState({
                selectedProduct: e.target.value,
                selectedProductPrice: e.target.selectedProductPrice,
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
                // selectedProductPrice={product.selectedProductPrice}
              >
                {product.display}
              </option>
            ))}
          </Input>
          <div
            style={{
              color: "red",
              marginTop: "5px"
            }}
          >
            {this.state.validationError}
          </div>
        </div>
                    
       
          
          <div className="enterOpportunity">
          <Button type="submit" color="success" className="enterOpportunityButton"
                onClick={() => {
                    this.constructNewSale() 
                }}>Enter Details
            </Button>
            </div>
          
                </div>
              
                </React.Fragment>
            )
        }
    
    }
