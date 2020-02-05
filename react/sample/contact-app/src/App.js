import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/phone_form';

class App extends Component{
  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return(
      <PhoneForm onCreate={this.handleCreate} />
    );
  };
};

export default App;
