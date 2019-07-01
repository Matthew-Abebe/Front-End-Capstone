import React, { Component } from 'react'
import ApplicationViews from './applicationViews'
import Navigation from './navigation/navigation'

export default class Project extends Component {
    render() {
        return(
            <React.Fragment>
                <Navigation />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}