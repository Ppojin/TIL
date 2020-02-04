import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: this.props.init,
        info: {
            name: 'Hyojin',
            age: 10
        }
    };

    /*===================================================*/
    // LifeCycle Method
    // 실행
    constructor(props){
        super(props);
        console.log('call constructor');
    }
    // 생성자 호출 된 다음 실행
    componentDidMount(){
        console.log('componentDidMount')
    }
    // 업데이트 단계
    shouldComponentUpdate(nextProps, nextStats){
        // 5의 배수라면 리렌더링 하지 않음
        // 다음 생명주기 작동하지 않음
        console.log('shouldComponentUpdate');
        if (nextStats.count % 5 === 0) {
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextStats){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(nextProps, nextStats){
        console.log('componentDidUpdate');
    }
    /*===================================================*/

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