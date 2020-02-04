import React from 'react';


const css = {
    color: 'blue',
    fontSize: '15px'
}

const MyIntro2 = ({card})=>{
    return (
        <div style={css}>
            이름: {card.name}, 
            이메일: {card.email}, 
            전화번호: {card.phone}
        </div>
    );
};

export default MyIntro2;