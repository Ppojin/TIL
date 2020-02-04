import React, { Component } from 'react';
class MyIntro extends Component {
    render(){
        const css = {
            color: 'blue',
            fontSize: '40px'
        }

        return (
            <div style={css}>
                <div>이름: {this.props.name}</div>
                <div>이메일: {this.props.email}</div>
                <div>전화번호: {this.props.phone}</div>
            </div>
        );
    }
}

export default MyIntro;