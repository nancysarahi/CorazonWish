import {connect} from 'react-redux';
import "./App.css";
import App from "../App";
import {loadMyCatList} from "../actions";

// function mapStateToProps(state) {
//   return {
//    myCatList: state.myCatList
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    loadMyCatList: function(cat) {
      dispatch(loadMyCatList(cat));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);