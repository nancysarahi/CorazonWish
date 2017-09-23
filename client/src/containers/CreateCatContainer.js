import {connect} from 'react-redux';
import CreateCat from "../components/CreateCat";
import {createCat} from "../actions";
  
function mapDispatchToProps(dispatch) {
    return {
      createCat: function(cat){
        dispatch(createCat(cat));
      }
    }
  }
  
export default connect(null, mapDispatchToProps)(CreateCat);