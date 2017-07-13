import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../redux/configureStore';
import {Index} from '../views/Index';

const mapStateToProps = (state) => {
    return {
        currentTime: state.currentTime.currentTime,
        user: state.currentUser.user,
        loggedIn: state.currentUser.loggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTime: (...args) => dispatch(actions.currentTime.updateTime(...args)),
        login: (...args) => dispatch(actions.currentUser.login(...args)),
        logout: (...args) => dispatch(actions.currentUser.logout(...args))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)