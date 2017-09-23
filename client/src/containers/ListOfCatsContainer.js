import {connect} from 'react-redux';
import ListOfCats from "../components/ListOfCats";
import {removeCat} from "../actions";

function mapStateToProps(state) {
  return {
    cats: state.cats
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeCat: function(cat) {
      dispatch(removeCat(cat));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCats);