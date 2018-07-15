import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import {fetchUsers} from '../actions/index';

class UsersList extends Component {

    componentWillMount() {
        console.log(' Users list going to be mounted');
    }

    componentDidMount() {
        console.log(' USers list is mounted');
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user =>{
            return <li key={user.id}>{user.name}</li>
        });
    }
    render() {
        return(
        <div>
            List of users:
            <ul>
                {this.renderUsers()}
            </ul>
        </div>
        );
    }
 }

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: bindActionCreators(fetchUsers, dispatch)
    }
}

function mapStateToProps(state) {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps , mapDispatchToProps )(UsersList);