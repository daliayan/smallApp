import React, { Component } from 'react';

class PlusMinus extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }

    addingFunct = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    subtractingFunct = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    render(){
        return (
            <div>
                <h2>Click + or - to see me change</h2>
                <p>{this.state.counter}</p>
                <button className="button" onClick={this.addingFunct}>+</button>
                <button className="button" onClick={this.subtractingFunct}>-</button>
            </div>
        )
    }
}

export default PlusMinus;