import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './login.css'

export default class Login extends Component {

    state = {

        email: "",
        password: ""

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    handleLogin = (evt) => {

        let allUsers = this.props.users
        let inputEmail = this.state.email
        let inputPassword = this.state.password

        let matchUser = allUsers.find(user => user.email === inputEmail && user.password === inputPassword)
        console.log(this.state.email)
        evt.preventDefault()

        if (this.state.email | this.state.password === "") {
            window.alert("Please sign in.")
        }
        else if (!matchUser) {
            window.alert("User not found.")
        } else {
            sessionStorage.setItem(
                "userId",
                matchUser.id
            )
        } if (matchUser) {
            this.props.history.push("/")
            window.alert(`Welcome back ${matchUser.name}!`)
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className="registerWelcome">
                    <h1>Welcome to Hitchiker's Shop!</h1>
                    <h3>Please Login</h3>
                    <br></br>
                </div>

        <InputGroup>
            <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Email Address" onChange={this.handleFieldChange} type="email" id="email" />
      </InputGroup>

      <InputGroup>
            <InputGroupAddon addonType="prepend">
            </InputGroupAddon>
            <Input placeholder="Password" onChange={this.handleFieldChange} type="password" id="password" />
        </InputGroup>

      <Button type="submit" className="loginSubmit" onClick={this.handleLogin} color="success">Login</Button>

    <Link to="/register">
        <h3>Don't Have An Account?</h3>
      <Button className="registerButton" color="danger">Register Here</Button>
      </Link>

            </React.Fragment>

        )
    }
}