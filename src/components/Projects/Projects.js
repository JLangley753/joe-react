import React, {Component} from 'react';
import './Projects.css';
import xo from '../../img/noughtsandcrosses2.png';
import tmc from '../../img/tmc.png';
import sw from '../../img/spinnerapp.png';
import jc from '../../img/joescafe.jpg';
import af from '../../img/academicfilmandtv.jpg';
import ba from '../../img/boxaphotography.png';
import la from '../../img/leftarrow.png';
import ra from '../../img/rightarrow.png';

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slideIndex: 0
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

  }

  componentDidMount() {
    var projects = document.getElementsByClassName('projectcard');
    var projectsArray = Array.prototype.slice.call(projects);
    var projIndex = this.state.slideIndex;

    for (var k=0; k < projectsArray.length; k++) {
      projectsArray[k].classList.add('deactivecard');
      projectsArray[k].classList.remove('activecard');
    }
    projectsArray[projIndex].classList.remove('deactivecard');
    projectsArray[projIndex].classList.add('activecard');
  }

  componentDidUpdate() {
    var slideIndex = this.state.slideIndex;
    var projects = document.getElementsByClassName('projectcard');
    var projectsArray = Array.prototype.slice.call(projects);

    for (var k = 0; k < projects.length; k++) {
      projects[k].classList.add('deactivecard');
      projects[k].classList.remove('activecard');
    }
    projectsArray[slideIndex].classList.remove('deactivecard');
    projectsArray[slideIndex].classList.add('activecard');
  }

  previousSlide = () => {
    var projects = document.getElementsByClassName('projectcard');
    var slideIndex = this.state.slideIndex;
    if (slideIndex < 1) {
      this.setState({
        slideIndex: projects.length - 1
      })
    } else {
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex - 1
    }))
  }
  }

  nextSlide = () => {
    var projects = document.getElementsByClassName('projectcard');
    var slideIndex = this.state.slideIndex;
    if (slideIndex > projects.length - 2) {
      this.setState({
        slideIndex: 0
      })
    } else {
    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1
    }))
  }
  }

  render() {
    return (<div className="projs">
      <div className="pagebar content"></div>
      <section className="projectsSec content">
        <div className="projectslink">
          <a href="\">
            <h2>Projects</h2>
          </a>
        </div>
        <div className="projgridwrap">
          <button className="leftArrow arrow" onClick={this.previousSlide}><img src={la} alt=""/></button>
          <div className="projectsgrid">
            <a href="\">
              <div className="xsandos projectcard">
                <h3 className="fade">Noughts and Crosses</h3>
                <div className="projectcardimg fade">
                  <img src={xo} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: HTML, CSS, React</p>
                </div>
              </div>
            </a>
            <a href="\">
              <div className="tmc projectcard">
                <h3 className="fade">Tom's Marvellous Cocktails</h3>
                <div className="projectcardimg fade">
                  <img src={tmc} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: MERN Stack</p>
                </div>
              </div>
            </a>
            <a href="\">
              <div className="spinnerapp projectcard">
                <h3 className="fade">Spinner Wheel</h3>
                <div className="projectcardimg fade">
                  <img src={sw} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: HTML, CSS, React</p>
                </div>
              </div>
            </a>
            <a href="\">
              <div className="cafejoe projectcard">
                <h3 className="fade">Joe's Cafe</h3>
                <div className="projectcardimg fade">
                  <img src={jc} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: HTML, CSS, Javascript</p>
                </div>
              </div>
            </a>
            <a href="\">
              <div className="academicftv projectcard">
                <h3 className="fade">Academic Film & TV</h3>
                <div className="projectcardimg fade">
                  <img src={af} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: HTML, CSS, Javascript, PHP</p>
                </div>
              </div>
            </a>
            <a href="\">
              <div className="boxaphoto projectcard">
                <h3 className="fade">Box A Photography</h3>
                <div className="projectcardimg fade">
                  <img src={ba} alt="\"/></div>
                <div className="projectcardtxt fade">
                  <p>Technologies: HTML, Bootstrap, jQuery</p>
                </div>
              </div>
            </a>
          </div>
          <button className="rightArrow arrow" onClick={this.nextSlide}><img src={ra} alt="\"/></button>
        </div>
      </section>
    </div>)
  }
}

export default Projects;
