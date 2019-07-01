import React, { Component } from 'react'
import { Button } from 'reactstrap';

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
            user_email: this.state.user_email,
            user_password: this.state.user_password,
        }

        console.log(newUser)

        this.props.addUser(newUser)
            .then(() => this.props.history.push("/"))

            sessionStorage.setItem(this.state.user_name, this.state.user_password)
    }

    render() {
        return(
            <React.Fragment>

            <h2>Please Register</h2>

            <form className="registerUserForm">
                <div className="form-group">
                    {/* <label htmlFor="registerUserName">User Name</label> */}
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="user_name"
                        placeholder="New User Name"
                    />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="registerUserEmail">User Email</label> */}
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="user_email"
                        placeholder="New User Email"
                    />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="registerUserPassword">New User Password</label> */}
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="user_password"
                        placeholder="New User Password"
                    />
                </div>

                <Button type="button" onClick={this.handleRegister} className="addNewUserBtn" color="success">Register</Button>




            </form>



        </React.Fragment>
        )
    }
}