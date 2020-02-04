//import
import React, { Component } from 'react';
// import { Fragment } from 'react';
// import './App.css'
import MyIntro from './MyIntro';

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    return(
      <MyIntro />
    );  
  };
};

//export
export default App;
