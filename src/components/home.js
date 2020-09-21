import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

import './home.css'

export default class Home extends Component {

    render() {
        return(
          
            <div>
            <Jumbotron className="jumbotron">
              <h1 className="display-3">Nimble</h1>
              <p className="lead">Welcome to Nimble. A means to create leads, opportunities, and sales with ease.</p>
              <hr className="my-2" />
              <br></br>
              {/* <p className="vogon">So Keep Calm and Vogon.</p> */}

              <div>
                
              </div>
              
            </Jumbotron>   
              <Button tag="a" href="/register" className="registerButton" color="info">Register</Button>{' '} 
              <Button tag="a" href="/login" color="info" className="loginBtn">Login</Button>{' '}
              <Button color="info" className="logoutBtn" onClick={() => sessionStorage.clear("userId")}>Logout</Button>{' '}

            
          </div>

          
        )
    }
}
