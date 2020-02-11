import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Page1 from './view/page1';
import Page2 from './view/page2';
import Page3 from './view/page3';
import Header from './components/header';

function App(props) {
  return (
    <Router>
        <Header />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
    </Router>   
  );
}

export default App;