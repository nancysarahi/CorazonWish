import {connect} from 'react-redux';
import CreateKid from "../components/CreateKid";
import {createKid} from "../actions";
  
function mapDispatchToProps(dispatch) {
    return {
      createKid: function(kid){
        dispatch(createKid(kid));
      }
    }
  }
  
export default connect(null, mapDispatchToProps)(CreateKid);