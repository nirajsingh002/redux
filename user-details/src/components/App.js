import React, { Component } from 'react'
import UserList from '../containers/users-list'
import UserDetails from '../containers/user-details'
require('../scss/styles.scss');

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Username List:</h2>
                <UserList />
                <hr />
                <h2>User Details:</h2>
                <UserDetails />
            </div>
        )
    }
}
