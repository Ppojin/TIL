import React, { Component } from 'react';

import Add from './components/add';
import List from './components/list'

class App extends Component {
  id= 0;
  state = {
    items: []
  }
  addTodoHandler = (val) => {
    console.log(this.state.key)
    this.setState({
      items: this.state.items.concat({
        id: this.id++,
        val: val
      })
    })
  }

  delTodoHandler = (id) => {
    this.setState({
      items: this.state.items.filter((x) => x.id !== id)
    });
  }

  render() {
    return (
      <div>
        <Add addTodo={this.addTodoHandler} />
        <List items={this.state.items} delTodo={this.delTodoHandler}/>
      </div>
    );
  }
}

export default App;