import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import LandingPage from './components/home/LandingPage';
import MovieDetail from './components/home/MovieDetail';

import store from './redux/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/movie-detail/:id" component={MovieDetail} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
