import React, { Component } from 'react';

class AdderButton extends Component {
    constructor() {
        super();
        this.state = {
            num1: '',
            num2: '',
            total: []
        };
    }

    likerIncreasing(){
         this.setState({
            total: parseInt(this.state.num1) + parseInt(this.state.num2),
         });
    };

    render(){
        return <div className="liker-funct">
            <input type="text" value={this.state.num1} onChange={(event) => {this.setState({num1: event.target.value})}} placeholder="Enter a Number Here"/>
            <p>+</p>
            <input type="text" value={this.state.num2} onChange={(event) => {this.setState({num2: event.target.value})}} placeholder="Enter a Number Here"/>
            <h1>{this.state.total}</h1>
            <button className='Adding-Button' onClick={() => this.likerIncreasing()}>Click To Add</button>
            {/* <input type="text" value={this.state.total}/> */}
        </div>
    }
}

export default AdderButton;