import { connect } from 'react-redux';
import KidDetail from "../components/KidDetail";

function mapStateToProps(state) {
    return {
        kids: state.kids
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KidDetail);