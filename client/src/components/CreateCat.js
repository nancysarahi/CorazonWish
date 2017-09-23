import React, { Component } from "react";

class CreateCat extends Component {
    constructor() {
        super();
        this.state = {
            cat: {
                name: "",
                age: 0,
                breed: "",
                favoriteItem: "",
                sleepingTime: ""
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (this.props.createCat) {
                        this.props.createCat(this.state.cat);
                    }
                }}>
                    <div>
                        <div>
                            Name <input
                                onChange={(e) => {
                                    const cat = { name: e.target.value };
                                    this.setState({
                                        cat: Object.assign(this.state.cat, cat)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Age: <input
                                onChange={(e) => {
                                    const cat = { age: e.target.value };
                                    this.setState({
                                        cat: Object.assign(this.state.cat, cat)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Breed <input
                                onChange={(e) => {
                                    const cat = { breed: e.target.value };
                                    this.setState({
                                        cat: Object.assign(this.state.cat, cat)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Favorite Item: <input
                                onChange={(e) => {
                                    const cat = { favoriteItem: e.target.value };
                                    this.setState({
                                        cat: Object.assign(this.state.cat, cat)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Sleeping Time: <input
                                onChange={(e) => {
                                    const cat = { sleepingTime: e.target.value };
                                    this.setState({
                                        cat: Object.assign(this.state.cat, cat)
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <button>Create Cat</button>
                </form>
            </div >
        )
    }
}

export default (CreateCat);
