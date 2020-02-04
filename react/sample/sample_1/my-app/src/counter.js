import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 100
    };

    handleAdd = ()=>{
        this.setState({
            count: this.state.count + 1
        });
    };
    
    handleDis = ()=>{
        this.setState({
            count: this.state.count - 1 
        });
    };

    render() {

        return (
            <div>
                <h1>Counter</h1>
                <h1 id="num">{this.state.count}</h1>
                <button onClick={this.handleAdd} id="add">+</button>
                <button onClick={this.handleDis} id="dis">-</button>
            </div>
        );
    };
};

export default Counter