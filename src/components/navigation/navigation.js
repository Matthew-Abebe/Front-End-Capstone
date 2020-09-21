import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (

      <React.Fragment>
        {/* <div> */}
          {/* <p>List Based</p> */}
          <Nav className="navbar">
            <NavItem>
              <NavLink href="/"><strong>Home</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products"><strong>Products</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/leads"><strong>Leads</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/opportunities"><strong>Opportunities</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sales"><strong>Sales</strong></NavLink>
            </NavItem>
          </Nav>

          {/* <hr /> */}

        {/* </div> */}

      </React.Fragment>
    );
  }
}