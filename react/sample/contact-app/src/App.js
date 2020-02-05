import React, { Component, Fragment } from 'react';
import './App.css';
import PhoneForm from './components/phone_form';
import PhoneList from './components/phone_list';

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

  deleteHandler = (selected_id) => {
    const { contacts } = this.state;
    this.setState({
      contacts : contacts.filter(item => item.id !== selected_id)
    })
  }

  updateHandler = (selected_id, modName, modPhone) => {
    this.setState({
      contacts : [
        ...this.state.contacts.filter(item => item.id > selected_id),
        { id: selected_id, name: modName, phone: modPhone },
        ...this.state.contacts.filter(item => item.id < selected_id)
      ]
    })
  }

  render() {
    const { contacts } = this.state;
    return(
      <Fragment>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneList 
          data={contacts} 
          onUpdate={this.updateHandler}
          onDelete={this.deleteHandler}
        />
      </Fragment>
    );
  };
};

export default App;
