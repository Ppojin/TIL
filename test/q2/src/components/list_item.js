import React, { Component } from 'react';

class item extends Component {
    deleteItemHandler = () => {
        console.log(this.props.id)
        this.props.delTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <button onClick={this.deleteItemHandler}>x</button>
                <span>{this.props.val}</span>
            </div>
        );
    }
}

export default item;