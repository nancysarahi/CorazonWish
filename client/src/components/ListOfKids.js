import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component } from 'react';

class ListOfKids extends Component {
    handleDelete(kid) {
        if (this.props.removeKid) {
            this.props.removeKid(kid._id)
        }
    }
    render() {
        const kidDivs = this.props.kids.map(kid => {
            return (
                <div key={kid._id}>
                    <li>{kid.name}</li>
                    <button onClick={() => this.handleDelete(kid)}>
                        Delete Wish Kid Entry
                    </button>
                    <Link to={"/KidDetail/" + kid._id}> View Wish Kid Information</Link>
                </div>);
        });
        return (
            <div>
                {kidDivs}
            </div>
        );
    }
}
export default (ListOfKids);

ListOfKids.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};