import React, {Component} from 'react';
import './Navbar.css';
import gh from '../../img/gh.png';
import li from '../../img/li.png';
import ig from '../../img/ig.png';
import tw from '../../img/tw.png';
import lj from '../../img/littlejoe.jpg';

var dd = document.querySelector('.dd'); // dropdowm menu
var bars = document.getElementsByClassName('bar');
var barsArray = [].slice.call(bars);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      burger: false
    }
    this.burger = this.burger.bind(this);
    this.getClass = this.getClass.bind(this);
    this.changeburger = this.changeburger.bind(this);
  }

  burger() {
    dd.classList.toggle('ddshow');
    for (var i = 0; i < barsArray.length; i++) {
      barsArray[i].classList.toggle('changebar' + [i + 1]);
    }
    const burger = !this.state.burger;
    if (burger !== this.state.burger) {
      this.setState({burger})
    }
  }

  changeburger() {
    setTimeout(() => {
      this.setState({burger: false})
    }, 600)
  }

  getClass() {
    var top = this.state.isTop;
    var burger = this.state.burger;
    if (top === true && burger === true) {
      return 'ddshow';
    } else if (top === false && burger === true) {
      return 'ddshow changedd';
    } else if (top === false && burger === false) {
      return 'changedd';
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        setTimeout(function close() {
          dd.classList.remove('ddshow');
          for (var i = 0; i < barsArray.length; i++) {
            barsArray[i].classList.remove('changebar' + [i + 1]);
          }
        }, 600);
      });
    });
  }
  render() {

    return (<div className="Navbar">
      <div className={this.state.isTop
          ? 'topbar'
          : 'topbar solidnav'}>
        <div className={this.state.isTop
            ? 'littlejoe'
            : 'littlejoe amendedjoe'}>
          <a href="#toppage"><img src={lj} alt="Little Joe"/></a>
        </div>
        <div className={'dropdownmenu dd ' + this.getClass()}>
          <div className="projects">
            <a href="\">
              <h2 className={this.state.isTop
                  ? 'navlink'
                  : 'navlink changenavlink'}>Projects</h2>
            </a>
          </div>
          <div className="about">
            <a href="#aboutme" onClick={this.changeburger}>
              <h2 className={this.state.isTop
                  ? 'navlink'
                  : 'navlink changenavlink'}>About</h2>
            </a>
          </div>
          <div className="skills">
            <a href="#skills" onClick={this.changeburger}>
              <h2 className={this.state.isTop
                  ? 'navlink'
                  : 'navlink changenavlink'}>Skills</h2>
            </a>
          </div>
          <div className="contact">
            <a href="#contact" onClick={this.changeburger}>
              <h2 className={this.state.isTop
                  ? 'navlink'
                  : 'navlink changenavlink'}>Contact</h2>
            </a>
          </div>
          <div className={this.state.isTop
              ? 'socialmediawrap'
              : 'socialmediawrap smallsmwd'}>
            <div className="socialmedia">
              <a href="\"><img src={gh} alt=""/></a>
              <a href="\"><img src={li} alt=""/></a>
              <a href="\"><img src={ig} alt=""/></a>
              <a href="\"><img src={tw} alt=""/></a>
            </div>
          </div>
        </div>
        <div className={this.state.isTop
            ? 'burgermenu'
            : 'burgermenu changeburger'} onClick={this.burger}>
          <div className="bar1 bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar3 bar"></div>
        </div>
      </div>
    </div>)
  }
}

export default Navbar;
