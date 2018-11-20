import React, {Component} from 'react';
import './Skills.css';
import html from '../../img/techicons/html.png';
import css from '../../img/techicons/css.png';
import js from '../../img/techicons/javascript.png';
import jq from '../../img/techicons/jquery.png';
import re from '../../img/techicons/react.png';
import git from '../../img/techicons/git.png';
import node from '../../img/techicons/nodejs.png';
import php from '../../img/techicons/php.png';
import exp from '../../img/techicons/express.png';
import mdb from '../../img/techicons/mongo.png';

class Skills extends Component {
  render() {
    return (<div className="skills-section-wrap">
      <div className="pagebar content"></div>
      <section className="skillsSec content" id="skills">
        <h2>Skills</h2>
        <p>While I specialise in front end development, I have enjoyed my exposure to back end technologies and design principles. Below you'll find what kind of skills and technologies I've picked up during my studies.</p>
        <div className="skillsGrid">
          <div className="tooltip">
            <img src={html} className="techicon" alt=""></img>
            <span className="tooltiptext tthtml">HTML5</span>
          </div>
          <div className="tooltip">
            <img src={css} className="techicon" alt=""></img>
            <span className="tooltiptext ttcss">CSS3</span>
          </div>
          <div className="tooltip">
            <img src={js} className="techicon" alt=""></img>
            <span className="tooltiptext ttjs">JavaScript</span>
          </div>
          <div className="tooltip">
            <img src={jq} className="techicon" alt=""></img>
            <span className="tooltiptext">jQuery</span>
          </div>
          <div className="tooltip">
            <img src={re} className="techicon" alt=""></img>
            <span className="tooltiptext ttreact">React</span>
          </div>
          <div className="tooltip">
            <img src={git} className="techicon" alt=""></img>
            <span className="tooltiptext ttgit">Git</span>
          </div>
          <div className="tooltip">
            <img src={node} className="techicon" alt=""></img>
            <span className="tooltiptext ttnode">Node.js</span>
          </div>
          <div className="tooltip">
            <img src={php} className="techicon" alt=""></img>
            <span className="tooltiptext ttphp">PHP</span>
          </div>
          <div className="tooltip">
            <img src={exp} className="techicon" alt=""></img>
            <span className="tooltiptext ttexpress">Express.js</span>
          </div>
          <div className="tooltip">
            <img src={mdb} className="techicon" alt=""></img>
            <span className="tooltiptext ttmongo">MongoDB</span>
          </div>
        </div>
      </section>
    </div>)
  }
}

export default Skills;
