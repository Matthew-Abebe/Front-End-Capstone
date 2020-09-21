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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/leads">Leads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/opportunities">Opportunities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sales">Sales</NavLink>
            </NavItem>
          </Nav>

          {/* <hr /> */}

        {/* </div> */}

      </React.Fragment>
    );
  }
}