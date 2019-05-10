import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList';
import { selectUser } from '../actions';

const mapStateToProps = (state) => ({
    users: state.users
})

// const matchDispatchToProps = (dispatch) => ({
//     bindActionCreators({ selectUser: selectUser }, dispatch)
// })

const matchDispatchToProps = dispatch => ({
    selectUser: user => dispatch(selectUser(user))
})



export default connect(mapStateToProps, matchDispatchToProps)(UserList);