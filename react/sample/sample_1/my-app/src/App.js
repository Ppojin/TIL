//import
import React, { Component } from 'react';
// import { Fragment } from 'react';
import Counter from './Counter';

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const myCount = 0;
    return(
      <Counter init={myCount}/>
    );  
  };
};

//export
export default App;
