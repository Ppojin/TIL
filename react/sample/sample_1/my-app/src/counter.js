import React, {Component} from 'react';
const ErrorObject

class Counter extends Component {
    state = {
        count: this.props.init,
        info: {
            name: 'Hyojin',
            age: 10
        }
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

    handleChangeInfo = () => {
        // 1. this.state.info를 변경
        // this.setState({
        //     info: {
        //         name: 'ppojin'
        //     }
        // });
        // 1. this.state.info를 전개연산자 이용 원래 값 덮어쓰고 name을 변경
        this.setState({
            info: {
                ...this.state.info,
                name: 'Ppojin'
            }
        });

    }

    render() {

        return (
            <div>
                <h1>Counter</h1>
                <h1 id="num">{this.state.count}</h1>
                <h2>{this.state.info.name} / {this.state.info.age}</h2>
                <button onClick={this.handleAdd} id="add">+</button>
                <button onClick={this.handleDis} id="dis">-</button>
                <button onClick={this.handleChangeInfo}>change info.name</button>
            </div>
        );
    };
};

export default Counter