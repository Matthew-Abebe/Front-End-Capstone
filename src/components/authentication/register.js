import React, { Component } from 'react'
import { Button, Input } from 'reactstrap';

import './register.css'

export default class Register extends Component {

    state = {
        user_name: "",
        user_email: "",
        user_password: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value //[evt.target.id] 'id' matches the props in state.
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    handleRegister = evt => {

        const newUser = {
            user_name: this.state.user_name,
            email: this.state.user_email,
            password: this.state.user_password,
        }

        // console.log(newUser)

        this.props.addUser(newUser)
            .then(() => this.props.history.push("/"))

            sessionStorage.setItem(this.state.user_name, this.state.user_password)

            alert(`${this.state.user_name}, Thank you for registering with Leadox!`)
    }

    render() {
        return(
            <React.Fragment>
            
            <div className="pleaseRegister">
            <h2>Please Register</h2>
            </div>

            <br></br>

            <form className="registerUserForm">
                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="newUserForm"
                        onChange={this.handleFieldChange}
                        id="user_name"
                        placeholder="New User Name"
                    />
                </div>

                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="newUserEmail"
                        onChange={this.handleFieldChange}
                        id="user_email"
                        placeholder="New User Email"
                    />
                </div>

                <div className="form-group">
                    <Input
                        type="text"
                        required
                        className="newUserPassword"
                        onChange={this.handleFieldChange}
                        id="user_password"
                        placeholder="New User Password"
                    />
                </div>

                <Button type="button" onClick={this.handleRegister} className="addNewUserBtn" color="success" size="lg">Register</Button>

            </form>

        </React.Fragment>
        )
    }
}