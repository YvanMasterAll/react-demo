import {connect} from 'react-redux';
import {actions} from '../redux/configureStore';
import {Home} from '../views/Home';

const mapStateToProps = (state) => {
    return {
        currentTime: state.currentTime.currentTime
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTime: (...args) => dispatch(actions.currentTime.updateTime(...args)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)