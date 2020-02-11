import React, { Component } from 'react';

class add extends Component {
    state = {
        val: ""
    }

    addTodoHandler = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.val);
        this.setState({
            val: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.addTodoHandler}>
                <input type="text" id="inputTodo" onChange={(e) => this.setState({val: e.target.value})} value={this.state.val}></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default add; 