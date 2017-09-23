import React, { Component } from "react";
import { createCat } from "../actions";

class CreateCat extends Component {
    constructor() {
        super();
        this.state = {
            cat:{
            name: "",
            age: 0,
            breed: "",
            favoriteItem: "",
            sleepingTime: ""
            }
        }
    }
        // handleChange(e) {
        //     let cat = this.state.cat;
        //     cat[e.target.name] = e.target.value;
        //     this.setState({ cat: cat });
        // }

        // handleSubmit(e) {
        //     e.preventDefault();
        //     if (this.props.createCat) {
        //         this.props.createCat(this.state.cat);
        //         this.setState({cat:{}});
        //         this.render();
        //     };
        // }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (this.props.createCat) {
                        this.props.createCat(this.state);
                    }
                }}>
                    <div>
                        <div>
                            Name: <input onChange={(e) => {
                                this.setState({
                                    name: e.target.value
                                });
                            }} />
                        </div>
                        <div>
                            Age: <input onChange={(e) => {
                                this.setState({
                                    age: e.target.value
                                });
                            }} />
                        </div>
                        <div>
                            Breed: <input onChange={(e) => {
                                this.setState({
                                    breed: e.target.value
                                });
                            }} />
                        </div>
                        <div>
                            Favorite Item: <input onChange={(e) => {
                                this.setState({
                                    favoriteItem: e.target.value
                                });
                            }} />
                        </div>
                        <div>
                            Sleeping Time: <input onChange={(e) => {
                                this.setState({
                                    sleepingTime: e.target.value
                                });
                            }} />
                        </div>
                    </div>
                    <button>Create Cat</button>
                </form>
            </div >
        )
    }
}

export default (CreateCat);
