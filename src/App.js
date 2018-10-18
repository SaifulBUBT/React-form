import React, { Component } from 'react';

import './App.css';
import PostForm from './form/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4 mb-4">Go to console mode to see form results. </h1>
        <PostForm />
      </div>
    );
  }
}

export default App;
