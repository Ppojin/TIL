import React, { Component, Fragment } from 'react';
import './App.css';
import PhoneForm from './components/phone_form';
import PhoneList from './components/phone_list';
import SearchForm from './components/search_form';

class App extends Component {
  state = {
    contacts: [],
    result: [],
    keyword: ''
  }

  constructor(props){
    super(props)
    const contacts = [
      { id: 0, name: 'admin', phone: '010-1234-5678' },
      { id: 1, name: '나연', phone: '010-5898-1298' },
      { id: 2, name: '정연', phone: '010-1061-7283' },
      { id: 3, name: '모모', phone: '010-2993-8053' },
      { id: 4, name: '사나', phone: '010-1012-0974' },
      { id: 5, name: '지효', phone: '010-6674-9301' },
      { id: 6, name: '미나', phone: '010-1009-2966' },
      { id: 7, name: '다현', phone: '010-8928-9773' },
      { id: 8, name: '채영', phone: '010-1002-7724' },
      { id: 9, name: '쯔위', phone: '010-8588-7678' }
    ]
    this.state = {
      contacts: contacts,
      result: contacts
    }
    this.id = this.state.contacts.length;
  }
  // state = {
  //   contacts: [
  //     { id: 0, name: 'admin', phone: '010-1234-5678' },
  //     { id: 1, name: '나연', phone: '010-5898-1298' },
  //     { id: 2, name: '정연', phone: '010-1061-7283' },
  //     { id: 3, name: '모모', phone: '010-2993-8053' },
  //     { id: 4, name: '사나', phone: '010-1012-0974' },
  //     { id: 5, name: '지효', phone: '010-6674-9301' },
  //     { id: 6, name: '미나', phone: '010-1009-2966' },
  //     { id: 7, name: '다현', phone: '010-8928-9773' },
  //     { id: 8, name: '채영', phone: '010-1002-7724' },
  //     { id: 9, name: '쯔위', phone: '010-8588-7678' }
  //   ], 
  //   result: []
  // }

  handleCreate = (data) => {
    console.log(data);
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.concat({
        id: this.id++,
        ...data
      })
    })
    this.searchHandler(this.state.keyword);

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
      contacts: contacts.filter(item => item.id !== selected_id)
    })
    this.searchHandler(this.state.keyword);
  }

  updateHandler = (selected_id, data) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.map((item) => (
        item.id === selected_id
          ? { ...item, ...data }
          : item
      ))
    });
    this.searchHandler(this.state.keyword);
  };
  
  searchHandler = (keyword) => {
    const { contacts } = this.state;
    const result = contacts.filter((v, i) => (v.name.indexOf(keyword)!==-1)? true : false);
    this.setState({
      result: result,
      keyword: keyword
    })
  }

  render() {
    return (
      <Fragment>
        <SearchForm onSearch={this.searchHandler}/>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneList
          data={this.state.result}
          onUpdate={this.updateHandler}
          onDelete={this.deleteHandler}
        />
      </Fragment>
    );
  };
};

export default App;
