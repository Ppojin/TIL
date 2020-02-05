import React, { Component, Fragment } from 'react';
import "./phone_item.css";

class UpdateItem extends Component {

  render(){
    const { name, phone } = this.props;
    return(
      <Fragment>
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
      </Fragment>
    )
  }
}

class PhoneItem extends Component {
  updateHandler = () => {
    // const { id } = this.props.item;
    // this.props.onUpdate(id, updatedName, updatedPhone);
  }

  deleteHandler = () => {
    this.props.onDelete(this.props.item.id);
  }

  render(){
    const { name, phone } = this.props.item;
    return(
      <div>
        <div className="item">
          <UpdateItem name={name} phone={phone}/>
          <button onClick={this.updateHandler}>update</button>
          <button onClick={this.deleteHandler}>delete</button>
        </div>
      </div>
    );
  };
};

export default PhoneItem