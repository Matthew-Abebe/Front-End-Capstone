import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

import './home.css'

export default class Home extends React.Component {

    render() {
        return(
            <div>
            <Jumbotron className="jumbotron">
              <h1 className="display-3">Don't Panic!</h1>
              <p className="lead">Welcome to Hitchhiker's Shop</p>
              <hr className="my-2" />
              <p>A one stop shop for all intergalactic, hitchiking needs.</p>
              <br></br>
              <p className="vogon">So, Keep Calm and Vogon.</p>
              <p className="lead">

                <ButtonGroup>
                <Link to="/login">
                <Button outline color="primary" className="loginBtn">Login</Button> &nbsp;&nbsp;&nbsp;
                </Link>

                <Button outline color="danger" onClick={() => sessionStorage.clear()}>Logout</Button>
                </ButtonGroup>
              </p>
            </Jumbotron>
          </div>
        )
    }
}
