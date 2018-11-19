import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
