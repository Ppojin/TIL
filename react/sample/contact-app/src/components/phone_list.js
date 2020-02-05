import React, { Component } from 'react';

class PhoneList extends Component {
    render(){
        const { data } = this.props; // contacts => data.contacts;
        const trList = data.map((value, index)=>{return (
            <tr key={value.id}><td>{value.id}</td><td>{value.name}</td><td>{value.phone}</td></tr>
        )})
        return(
            <div>
                <table border='1'>
                    <tbody>
                        <tr><td>id</td><td>name</td><td>phone</td></tr>
                        {trList}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default PhoneList;