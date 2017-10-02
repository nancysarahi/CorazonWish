import React, {Component} from "react";

class CreateKid extends Component {
    constructor() {
        super();
        this.state = {
            kid: {
                name: "",
                age: 0,
                parentsNames: "",
                siblingsInfo: "",
                favCharacter: "",
                arrivalDate: "",
                departureDate: "",
                additionalInfo: ""

            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (this.props.createKid) {
                        this.props.createKid(this.state.kid);
                    }
                }}>
                    <div>
                        <div>
                            Name: <input
                                onChange={(e) => {
                                    const kid = { name: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Age: <input
                                onChange={(e) => {
                                    const kid = { age: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Parent's Names: <input
                                onChange={(e) => {
                                    const kid = { parentsNames: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Siblings Info: <input
                                onChange={(e) => {
                                    const kid= { siblingsInfo: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Favorite Character: <input
                                onChange={(e) => {
                                    const kid = { favCharacter: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Arrival Date: <input
                                onChange={(e) => {
                                    const kid = { arrivalDate: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Departure Date: <input
                                onChange={(e) => {
                                    const kid = { departureDate: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Additional Comments: <input
                                onChange={(e) => {
                                    const kid = { additionalInfo: e.target.value };
                                    this.setState({
                                        kid: Object.assign(this.state.kid, kid)
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <button>Create New Wish Kid Entry</button>
                </form>
            </div >
        )
    }
}

export default (CreateKid);
