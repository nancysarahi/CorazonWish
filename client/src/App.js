import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ListOfKids from "./containers/ListOfKidsContainer";
import CreateKid from "./containers/CreateKidContainer";
import KidDetail from "./containers/KidDetailContainer";
import SideNav from "./components/SideNav";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.loadKids();
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App-header">
        <SideNav />
        <Switch>
        <Route path="/kids" component={ListOfKids} />
        <Route path="/createkid" component={CreateKid} />
        <Route path="/KidDetail/:id" component={KidDetail} />
        <Route path="/" component={Dashboard} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default (App);


