import React, { Component } from 'react';
import Home from './Home';
import ArticleList from './ArticleList';
import ArticleAdd   from './ArticleAdd';
import ArticleInfo from './ArticleInfo';
import ArticleEdit from './ArticleEdit';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navigation />
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}

const Navigation = () => (
  <nav className="">
    <ul className="">
      <li className="">
        <NavLink exact className="" activeClassName="" to="/">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink exact className="" activeClassName="" to="/articles">
          Articles
        </NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);

export default App;
