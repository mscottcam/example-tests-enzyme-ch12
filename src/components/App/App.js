import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    loading: false
  }

  changeLoading(loading) {
    this.setState({ loading })
  }

  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

export default App;
