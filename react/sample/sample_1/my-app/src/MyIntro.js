import React, { Component } from 'react';
class MyIntro extends Component {
    render(){
        const css = {
            color: 'blue',
            fontSize: '40px'
        }

        return (
            <div style={css}>
                <div>이름: {this.props.card.name}</div>
                <div>이메일: {this.props.card.email}</div>
                <div>전화번호: {this.props.card.phone}</div>
            </div>
        );
    }
}

export default MyIntro;