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
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
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

        // sessionStorage.setItem(
        //     "credentials",
        //     JSON.stringify({
        //         email: this.state.email,
        //         // password: this.state.password
        //     })
        // )
    }

    render() {
        return (


            <React.Fragment>

                <div className="registerWelcome">
                    <h1>Welcome to Hitchiker's Shop!</h1>
                    <h3>Please Login</h3>
                    <br></br>
                </div>

                {/* <form
                    className="LoginFrom">
                    <h1 className="">Please Sign In</h1>
                    <label htmlFor="inputEmail">
                        Email Address:
                </label>

                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder=""
                        required="" autoFocus="" />
                    <br></br>

                    <label htmlFor="inputPassword">
                        Password:
                </label>

                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder=""
                        required="" autoFocus="" />
                    <br></br>

                    <button type="submit"
                        className="LoginSubmit"
                        onClick={this.handleLogin} >
                        Login
                    <br></br>
                    </button>


                    <p>Don't Have an Account?</p>
                    <br></br>
                    <Link to="/register">
                        <button className="Register">
                            Register Here</button>
                    </Link>
                </form> */}

                <InputGroup>
        <InputGroupAddon addonType="prepend">
          {/* <InputGroupText>Enter Email Address</InputGroupText> */}
        </InputGroupAddon>
        <Input placeholder="Email Address" onChange={this.handleFieldChange} type="email" id="email" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend">
          {/* <InputGroupText>Password</InputGroupText> */}
        </InputGroupAddon>
        <Input placeholder="Password" onChange={this.handleFieldChange} type="password" id="password" />
      </InputGroup>

      <Button type="submit" className="loginSubmit" onClick={this.handleLogin} color="success">Login</Button>

      <br></br>

<Link to="/register">
    <h3>Don't Have An Account?</h3>
      <Button className="registerButton" color="danger">Register Here</Button>
      </Link>

            </React.Fragment>

        )
    }
}