import React, { Component, Fragment } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    // this.props.onSearch(e.target.value);
    // console.log(this.state);
  }

  searchingHandler = (e) => {
    e.preventDefault();
    if(this.state.term == '' || this.state.term == null || this.state.term == undefined){
      alert('검색어를 입력해 주세요');
    } else {
      this.props.onSearch(this.state.term);
    }
  }

  render(){
    return(
      <div className="search-bar">
        <label htmlFor="searchVideo" className="col-form-label">value of the input: {this.state.term}</label>
        <form className="form-inline" onSubmit={this.searchingHandler}>
          <div className="form-group col-md-6 col-sm-9 col-12">
            <input id="searchVideo" className="form-control form-control-md col-10" name='term' onChange={this.onInputChange}/>
            {/* <input type="submit" className="btn btn-primary col-2" value="submit"></input> */}
          </div>
        </form>
      </div>
    )
  }
}   

export default SearchBar;