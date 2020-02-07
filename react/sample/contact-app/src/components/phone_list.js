import React, { Component } from 'react';
import PhoneItem from './phone_item';
import "./phone_list.css";

class PhoneList extends Component {
  render(){
    const { data, onDelete, onUpdate } = this.props; // contacts => data.contacts;
    const trList = data.map((value, index)=>{return (
      <PhoneItem key={value.id} item={value} onDelete={onDelete}  onUpdate={onUpdate} />
    )})
    return(
      <div>
        {trList}
      </div>
    );
  };
};

export default PhoneList;