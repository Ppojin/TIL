//import
import React, { Component, Fragment } from 'react';
import './App.css'

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const name = 'Hyojin';
    const css = {
      color: 'red',
      background: 'black',
      padding: '20px',
      fontSize: '25px'
    }
    return(
      <div className='App-header'>
        <div style={css}>Hello, {name}</div>
      </div>
    );  
  };
};

//export
export default App;
