//import
import React, { Component, Fragment } from 'react';
import './App.css'

//class
// render 함수에서는 단 하나의 태그만 return 해야한다.
class App extends Component {
  render(){
    const time = 10;
    const name = "Hyojin";
    return(
      <div className="App-header">
        {/* {time < 15 ? (<div>Hello, {name}</div>) : (<div>Bye, {name}</div>)} */}
        {
          (
            function(){
              if (time < 12) return (<div>Good Morning, {name}</div>)
              else if (time < 18) return (<div>Good Afternoon, {name}</div>)
              else if (time < 22) return (<div>Good Evening, {name}</div>);
            }
          )()
        }
      </div>
    );
  };
};

//export
export default App;
