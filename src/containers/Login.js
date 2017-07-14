import {connect} from 'react-redux';
import {actions} from '../redux/configureStore';
import {Login} from '../views/Login';

const mapStateToProps = (state) => {
    return {
        user: state.currentUser.user,
        loggedIn: state.currentUser.loggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (...args) => dispatch(actions.currentUser.login(...args))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)