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
      <div class="pagebar content"></div>
      <section className="skillsSec content" id="skills">
        <h2>Skills</h2>
        <p>While I specialise in front end development, I have enjoyed my exposure to back end technologies and design principles. Below you'll find what kind of skills and technologies I've picked up during my studies.</p>
        <div className="skillsGrid">
          <div class="tooltip">
            <img src={html} class="techicon" alt=""></img>
            <span class="tooltiptext tthtml">HTML5</span>
          </div>
          <div class="tooltip">
            <img src={css} class="techicon" alt=""></img>
            <span class="tooltiptext ttcss">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={js} class="techicon" alt=""></img>
            <span class="tooltiptext ttjs">JavaScript</span>
          </div>
          <div class="tooltip">
            <img src={jq} class="techicon" alt=""></img>
            <span class="tooltiptext">jQuery</span>
          </div>
          <div class="tooltip">
            <img src={re} class="techicon" alt=""></img>
            <span class="tooltiptext ttreact">React</span>
          </div>
          <div class="tooltip">
            <img src={git} class="techicon" alt=""></img>
            <span class="tooltiptext ttgit">Git</span>
          </div>
          <div class="tooltip">
            <img src={node} class="techicon" alt=""></img>
            <span class="tooltiptext ttnode">Node.js</span>
          </div>
          <div class="tooltip">
            <img src={php} class="techicon" alt=""></img>
            <span class="tooltiptext ttphp">PHP</span>
          </div>
          <div class="tooltip">
            <img src={exp} class="techicon" alt=""></img>
            <span class="tooltiptext ttexpress">Express.js</span>
          </div>
          <div class="tooltip">
            <img src={mdb} class="techicon" alt=""></img>
            <span class="tooltiptext ttmongo">MongoDB</span>
          </div>
        </div>
      </section>
    </div>)
  }
}

export default Skills;
