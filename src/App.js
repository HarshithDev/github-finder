import React from 'react';
import Navbar from './components/layout/navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import noPage from './components/pages/404';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <main id='main'>
              <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={noPage} />
                </Switch>
              </div>
            </main>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
