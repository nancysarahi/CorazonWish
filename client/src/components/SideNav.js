import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <div className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Home
          </Link>
        </div>
        <div>
          <Link to="/ListOfCats">
            <i className="fa fa-fw fa-bar-chart-o" /> List of Cats
          </Link>
        </div>
        <div>
          <Link to="/CreateCat">
            <i className="fa fa-fw fa-table" /> Create Cat
          </Link>
        </div>
      </ul>
    </div>);
}

export default SideNav;