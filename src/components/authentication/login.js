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
            window.alert(`Welcome back ${matchUser.user_name}!`)
        }
    }

    render() {
        return (
            <React.Fragment>

                <div className="loginWelcome">
                    <h1 className="loginWelcome">Welcome to Leadox.</h1>
                </div>

                    <br></br>
        {/* <InputGroup>
            <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Email Address" onChange={this.handleFieldChange} type="email" id="email" className="loginEmailForm"/>
      </InputGroup>

      <InputGroup>
            <InputGroupAddon addonType="prepend">
            </InputGroupAddon>
            <Input placeholder="Password" onChange={this.handleFieldChange} type="password" id="password" className="loginPasswordForm"/>
        </InputGroup> */}
        
        <div className="pleaseLogin">
        <p>Please login to continue.</p>
            </div>
        <form className="login-form-group">
                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="loginEmailForm"
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder="Enter Email"
                    />
                </div>

                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="loginPasswordForm"
                        onChange={this.handleFieldChange}
                        id="password"
                        placeholder="Enter Password"
                    />
                </div>


      <Button type="submit" className="loginSubmit" onClick={this.handleLogin} color="success" size="lg">Login</Button>

      </form>

      {/* <br></br>

        <div className="toRegister">
   
        <h3>Don't Have An Account?</h3>
      <Button tag="a" href="/register" className="registerButton" color="danger">Register Here</Button>

      </div> */}

            </React.Fragment>

        )
    }
}