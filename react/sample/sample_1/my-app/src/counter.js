import React, {Component} from 'react';
const ErrorObject = () => {
    throw (new Error('에러발생'));
};

class Counter extends Component {
    state = {
        count: this.props.init,
        error: false
    };

    // 생명주기 메서드
    componentDidCatch(error, info){
        this.setState({
            error: true
        })
    }
    // ./생명주기 메서드

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
        if(this.state.error) return(<h1>에러가 발생했습니다.</h1>);

        return (
            <div>
                <h1>Counter</h1>
                <h1 id="num">{this.state.count}</h1>
                {this.state.count === 3 && <ErrorObject />}
                <button onClick={this.handleAdd} id="add">+</button>
                <button onClick={this.handleDis} id="dis">-</button>
            </div>
        );
    };
};

export default Counter