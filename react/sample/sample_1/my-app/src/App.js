//import
import React, { Component } from 'react';
// import { Fragment } from 'react';
// import './App.css'
import MyIntro from './MyIntro';

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const myName = "Hyojin";
    const myEmail = "ppojin@kakao.com";
    const myPhone = "010-5728-0062";
    return(
      <MyIntro name={myName} email={myEmail} phone={myPhone}/>
    );  
  };
};

//export
export default App;
