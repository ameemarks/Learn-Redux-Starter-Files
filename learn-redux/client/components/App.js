import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        // gives back to pieces of state that we need
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

