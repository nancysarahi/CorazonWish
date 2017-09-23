import React, { Component } from "react";
import "./App.css";
import ListOfCats from "./containers/ListOfCatsContainer";
import CreateCat from "./containers/CreateCatContainer";
import CatDetail from "./containers/CatDetailContainer";
import SideNav from "./components/SideNav";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.loadMyCatList();
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <SideNav />
        <Switch>
        <Route path="/ListOfCats" component={ListOfCats} />
        <Route path="/CreateCat" component={CreateCat} />
        <Route path="/CatDetail/:id" component={CatDetail} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default (App);


