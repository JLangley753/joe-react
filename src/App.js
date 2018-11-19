import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Projects />
      </div>
    );
  }
}

export default App;
