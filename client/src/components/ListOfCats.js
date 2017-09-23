import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React,{Component} from 'react';

class ListOfCats extends Component {
    handleDelete(cat) {
        if(this.props.removeCat) {
          this.props.removeCat(cat._id)
        }
      }
render(){
    const catDivs = this.props.cats.map(cat => {
        return (
        <div key={cat._id}>
                <li>{cat.name}</li>
                <button
          onClick={() => this.handleDelete(cat)}
        >
          Delete
        </button>
            <Link to={"/CatDetail/" + cat._id}> View Cat </Link>
        </div>);
    });
    return (
        <div>
            {catDivs}
        </div>
    );
}
}

export default(ListOfCats);

ListOfCats.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string.isRequired,
    favoriteItem: PropTypes.string.isRequired,
    sleepingTime: PropTypes.number.isRequired,
};