import React, {Component} from 'react';
import './Navbar.css';
import gh from '../../img/gh.png';
import li from '../../img/li.png';
import ig from '../../img/ig.png';
import tw from '../../img/tw.png';
import lj from '../../img/littlejoe.jpg';

class Navbar extends Component {
  state = {
    isTop: true,
  }

  burger() {

  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  render() {
    return (
      <div className="Navbar">
      <div className={this.state.isTop ? 'topbar' : 'topbar solidnav'}>
        <div className={this.state.isTop ? 'littlejoe' : 'littlejoe amendedjoe'}><img src={lj} alt=""/></div>
        <div className="dropdownmenu">
          <div className="projects">
            <a href="\"><h2 className={this.state.isTop ? 'navlink' : 'navlink changenavlink'}>Projects</h2></a>
          </div>
          <div className="about">
            <a href="\"><h2 className={this.state.isTop ? 'navlink' : 'navlink changenavlink'}>About</h2></a>
          </div>
          <div className="skills">
            <a href="\"><h2 className={this.state.isTop ? 'navlink' : 'navlink changenavlink'}>Skills</h2></a>
          </div>
          <div className="contact">
            <a href="\"><h2 className={this.state.isTop ? 'navlink' : 'navlink changenavlink'}>Contact</h2></a>
          </div>
          <div className={this.state.isTop ? 'socialmediawrap' : 'socialmediawrap smallsmwd'}>
            <div className="socialmedia">
              <a href="\"><img src={gh} alt=""/></a>
              <a href="\"><img src={li} alt=""/></a>
              <a href="\"><img src={ig} alt=""/></a>
              <a href="\"><img src={tw} alt=""/></a>
            </div>
          </div>
        </div>
        <div className={this.state.isTop ? 'burgermenu' : 'burgermenu changeburger'} onClick={this.burger}>
          <div className="bar1 bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar3 bar"></div>
        </div>
      </div>
    </div>)
  }
}

export default Navbar;
