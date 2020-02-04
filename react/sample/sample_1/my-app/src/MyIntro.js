import React, { Component } from 'react';
class MyIntro extends Component {
    render() {
        const css = {
            color: 'red',
            fontSize: '15px'
        }

        return (
            <div style={css}>
                이름: {this.props.card.name},
                이메일: {this.props.card.email},
                전화번호: {this.props.card.phone}
            </div>
        );
    }
}

export default MyIntro;