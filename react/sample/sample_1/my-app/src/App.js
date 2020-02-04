//import
import React, { Component } from 'react';
// import { Fragment } from 'react';
// import './App.css'
import MyIntro from './MyIntro';

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const myCard = {
      name: "Hyojin",
      email: "im@ppojin.com",
      phone: "010-1234-5627",
    }
    return(
      <MyIntro card={myCard}/>
    );  
  };
};

//export
export default App;
