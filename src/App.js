import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import ResizeSquare from './views/resize_square';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ ResizeSquare } />
        </div>
      </Router>
    );
  }
}

export default App;
