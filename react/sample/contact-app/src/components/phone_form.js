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
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    name='name'
                    onChange={this.handleChange} 
                    placeholder='이름을 입력하세요'    
                />
                <input 
                    name='phone'
                    onChange={this.handleChange} 
                    placeholder='전화번호를 입력하세요'  
                />
                <div>
                    <span id='name'>
                        {this.state.name}
                    </span>
                    <span> / </span>
                    <span id='phone'>
                        {this.state.phone}
                    </span>
                </div>
                <button type='submit'> 등록 </button>
            </form>
        )
    }
} 

export default PhoneForm