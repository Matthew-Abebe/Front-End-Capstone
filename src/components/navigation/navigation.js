import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

import './navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      

      <React.Fragment>
        <div>
          {/* <p>List Based</p> */}
          <Nav className="navbar">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/purchases">Purchases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/probabilityDrive">Probability-Drive</NavLink>
            </NavItem>
          </Nav>

          <hr />
          {/* <p>Link Based</p> */}
          {/* <Nav>
            <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
          </Nav> */}
        </div>

        {/* <div>
          <Jumbotron>
            <h1 className="display-3">Don't Panic!</h1>
            <p className="lead">Welcome to Hitchhiker's Shop</p>
            <hr className="my-2" />
            <p>A one stop shop for all intergalactic, hitchiking needs.</p>
            <br></br>
            <p>So, Keep Calm and Vogon.</p>
            <p className="lead">
              <Link to="/login">
              <Button color="primary">Login</Button>
              </Link>
            </p>
          </Jumbotron>
        </div> */}


      </React.Fragment>
    );
  }
}