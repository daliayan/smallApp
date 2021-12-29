import React, { Component } from 'react'

export class BoldenMe extends Component {
    state = {
        letters: ''
    }

    onClick = () => {
        this.setState({
            letters: this.state.letters 
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick} style={this.state.onClick ? {fontWeight: 'normal'} : {fontWeight: 'bold'}}>A{this.props.letters}</button>
                <button onClick={this.onClick} style={this.state.onClick ? {fontWeight: 'normal'} : {fontWeight: 'bold'}}>B{this.props.letters}</button>
            </div>
        )
    }

}

export default BoldenMe;