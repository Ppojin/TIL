import React, { Component } from 'react';
// import Fragment from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({ name: '' , phone: '' });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange} 
                    placeholder='이름을 입력하세요'    
                />
                <input 
                    value={this.state.phone}
                    name='phone'
                    onChange={this.handleChange} 
                    placeholder='전화번호를 입력하세요'  
                />
                <button type='submit'> 등록 </button>
            </form>
        )
    }
} 

export default PhoneForm