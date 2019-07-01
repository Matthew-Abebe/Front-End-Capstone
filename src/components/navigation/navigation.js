import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

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

        </div>

      </React.Fragment>
    );
  }
}