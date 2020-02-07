import React, { Component } from 'react';

class SearchForm extends Component{
    state = {
        searchVal: ''
    }

    searchHandler = (e) => {
        e.preventDefault();
        this.setState({
            searchVal: e.target.value
        })
        // this.state.searchVal = e.target.value;
        this.props.onSearch(this.state.searchVal);
    }

    render(){
        return(
            <form>
                <input name="searchVal" onChange={this.searchHandler} />
            </form> 
        )
    }
}

export default SearchForm