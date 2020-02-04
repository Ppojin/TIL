//import
import React, { Component, Fragment } from 'react';
import './App.css'

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const name = "Hyojin";
    return(
      <div className="App-header">
        <h1>
          Hello, {name}
        </h1>
      </div>
    );
  };
};

//export
export default App;
