import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import MoviesCardList from './MoviesCardList';

import Loader from '../layout/Loader';

export class LandingPage extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBar />
        {loading ? <Loader /> : <MoviesCardList />}
      </div>
    )
  };
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(LandingPage);
