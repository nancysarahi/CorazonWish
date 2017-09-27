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
          <Link to="/ListOfCats">
            <i className="fa fa-fw fa-bar-chart-o" /> List of Cats
          </Link>
        </li>
        <li>
          <Link to="/CreateCat">
            <i className="fa fa-fw fa-table" /> Create Cat
          </Link>
        </li>
      </ul>
    </div>);
}

export default SideNav;