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
        
            <div className="loginButton">
                <Link to="/login">
                <Button color="success" size="sm" className="loginBtn">
                  Login
                  </Button>{' '}
                  {/* &nbsp;&nbsp;&nbsp; */}
                  </Link>
                  </div>

            <div className="logoutButton">
               <Button color="danger" size="sm" className="logoutBtn" onClick={() => sessionStorage.clear("userId")}>
                  Logout
                  </Button>
                  </div>
            </Jumbotron>   

            <br></br>

        <div className="toRegister">
   
        {/* <h3>Don't Have An Account?</h3> */}
      <Button tag="a" href="/register" className="registerButton" color="danger">Register Here</Button>

      </div>   
            
          </div>

          
        )
    }
}
