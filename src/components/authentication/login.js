import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import './login.css'

export default class Login extends Component {

    state = {
        
        user_name: "",
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
        let inputUserName = this.state.user_name
        let inputPassword = this.state.password

        let matchUser = allUsers.find(user => user.user_name === inputUserName && user.password === inputPassword)
        console.log(this.state.user_name)
        evt.preventDefault()

        if (this.state.user_name | this.state.password === "") {
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
        
        <div className="pleaseLogin">
        <p>Please login to continue.</p>
            </div>
        <form className="login-form-group">
                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="loginUserNameForm"
                        onChange={this.handleFieldChange}
                        id="user_name"
                        placeholder="Enter User Name"
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