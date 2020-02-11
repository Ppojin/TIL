import React, { Component } from 'react';
import Item from './list_item';

class list extends Component {
    render() {
        const itemListing = this.props.items.map((value, index) => {
            return <Item key={value.id} id={value.id} val={value.val} delTodo={this.props.delTodo}/>
        })
        return (
            <div>
                {JSON.stringify(this.props.items)}
                {itemListing}
            </div>
        );
    }
}

export default list;        