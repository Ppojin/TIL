> index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import youtubeSearch from 'youtube-api-search';
import dotenv from 'dotenv';

dotenv.config();

const key= process.env.API_KEY

const App = () => {
  return(
    <div className='text-center'>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
```
> /componets/search_bar.js
```js
import React, { Component } from 'react';

class SearchBar extends Component{
  onInputChange = (e) => {
    console.log(e.target.value);
  }

  render(){
    return(
      <input onChange={this.onInputChange}/>
    )
  }
}   

export default SearchBar;
```