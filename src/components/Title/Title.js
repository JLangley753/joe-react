import React, { Component } from 'react';
import './Title.css';
import Navbar from '../Navbar/Navbar';

class Title extends Component {
  render() {
    return(
      <header className="homepage">
        <div id="toppage"></div>
      <Navbar></Navbar>
      <div className="intro" id="intro">
      <h1>I'm Joe, and I create fun, unique and beautiful websites.</h1></div>
      </header>
    )
  }
}

export default Title;
