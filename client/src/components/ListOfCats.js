import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

function ListOfCats(props) {
    const catDivs = props.cats.map(function(cat, i) {
        return (
        <div key={i}>
                <li>{cat.name}</li>
            <Link to={"/CatDetail/" + cat._id}> View Cat </Link>
        </div>);
    });
    return (
        <div>
            {catDivs}
        </div>
    );
}

export default(ListOfCats);

ListOfCats.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    breed: PropTypes.string.isRequired,
    favoriteItem: PropTypes.string.isRequired,
    sleepingTime: PropTypes.number.isRequired,
};