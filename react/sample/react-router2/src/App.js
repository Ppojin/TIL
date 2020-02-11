import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home';
import Login from './routes/Login';
import MyProfile from './routes/MyProfile';
import Posts from './routes/Posts';
import Search from './routes/Search';
import Header from './components/header';
import NotFound from './routes/NotFound';

const App = () => {
  //exact 가 없으면 하위에 있는 링크도 반환됨
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about/:id" component={About} />
        <Route exact path="/" component={Home} /> 
        <Route path="/login" component={Login} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/posts" component={Posts} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;