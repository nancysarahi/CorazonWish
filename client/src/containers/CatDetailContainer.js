import { connect } from 'react-redux';
import CatDetail from "../components/CatDetail";

function mapStateToProps(state) {
    return {
        cats: state.cats
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatDetail);