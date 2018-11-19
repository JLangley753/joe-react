import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Projects />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
