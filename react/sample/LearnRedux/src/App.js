import React from 'react';
import './App.css';
import BookList from './contaienrs/BookList';
import BookDetaili from './contaienrs/BookDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList />
        <BookDetaili />
      </header>
    </div>
  );
}

export default App;
