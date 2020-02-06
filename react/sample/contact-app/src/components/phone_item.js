import React, { Component, Fragment } from 'react';
import "./phone_item.css";

class PhoneItem extends Component {
  state = {
    editable: false,
    name: '',
    phone: ''
  }
  componentDidUpdate(preProps, preState){
    const { item , onUpdate } = this.props;
    if(!preState.editable && this.state.editable){
      this.setState({name: item.name, phone: item.phone})
    }
    //update
    if(preState.editable && !this.state.editable){
      onUpdate(item.id, {name: this.state.name, phone: this.state.phone})
    }
  }

  updateHandler = () => {
    const { editable } = this.state;
    this.setState({editable: !editable});
  }

  deleteHandler = () => {
    this.props.onDelete(this.props.item.id);
  }
  
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  render(){
    const { editable } = this.state;
    if(editable){
      console.log("수정모드")
      return(
        <div className="item">
          <div><input onChange={this.changeHandler} value={this.state.name} name="name" placeholder="이름을 입력해 주세요"/></div>
          <div><input onChange={this.changeHandler} value={this.state.phone} name="phone" placeholder="전화번호를 입력해 주세요"/></div>
          <button onClick={this.updateHandler}>submit</button>
          <button onClick={this.deleteHandler}>delete</button>
        </div>
      )
    }
    
    const { name, phone } = this.props.item;
    return(
      <div>
        <div className="item">
        <div className="name">{name}</div>
        <div className="phone">{phone}</div>
        <button onClick={this.updateHandler}>update</button>
        <button onClick={this.deleteHandler}>delete</button>
        </div>
      </div>
    );
  };
};

export default PhoneItem