import React, { Component, Fragment } from 'react';
import './App.css';
import PhoneForm from './components/phone_form';

class App extends Component{
  id = 1;
  state = {
    contacts: [
      {
        id: 0,
        name: '관리자',
        phone: '010-1234-5678'
      }
    ]
  }

  handleCreate = (data) => {
    console.log(data);
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.concat({
        id: this.id++,
        ...data
      })
    })

    // this.setState({
    //   contacts: [
    //     ...this.state.contacts, 
    //     {
    //       id:this.id++,
    //       ...data
    //     }
    //   ]
    // })
  }

  render() {
    const { contacts } = this.state;
    return(
      <Fragment>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(contacts)}
      </Fragment>
    );
  };
};

export default App;
