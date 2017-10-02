import {connect} from 'react-redux';
import ListOfKids from "../components/ListOfKids";
import {removeKid} from "../actions";

function mapStateToProps(state) {
  return {
    kids: state.kids
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeKid: function(kid) {
      dispatch(removeKid(kid));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfKids);