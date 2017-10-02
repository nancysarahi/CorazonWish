import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/ListOfKids">
            <i className="fa fa-fw fa-bar-chart-o" /> List of Wish Kids
          </Link>
        </li>
        <li>
          <Link to="/CreateKid">
            <i className="fa fa-fw fa-table" /> Create Wish Kid Entry
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;