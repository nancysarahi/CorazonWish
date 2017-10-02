import {connect} from 'react-redux';
import "../App.css";
import App from "../App";
import {loadKids} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadKids: function(kid) {
      dispatch(loadKids(kid));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);