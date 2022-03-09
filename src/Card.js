import React, { Component } from 'react'
import './App.css';
export class Card extends Component {
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://api.github.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div>;
        return (
            <>
                <ol>
                    {items.map((item) => (
                        <li>
                            <div className="card">
                                <div className="card-img">
                                    <img src={item.avatar_url} width="200" height="200" alt="user dp" />
                                </div>
                                <div className="card-name">
                                    <strong>{item.login}</strong>
                                </div>
                            </div>
                        </li>
                    ))
                }
                </ol>


            </>
        )
    }
}

export default Card