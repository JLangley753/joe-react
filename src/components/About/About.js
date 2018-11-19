import React, {Component} from 'react';
import './About.css';
import joe from '../../img/me.JPG';

class About extends Component {
  render() {
    return (<div className="about-section">
      <div className="pagebar content"></div>
      <section className="aboutme content" id="aboutme">
        <h2>About</h2>
        <div className="aboutmewrap">
          <div className="aboutmesection">
            <div className="aboutmeimg">
              <img src={joe} alt="A big picture of Joe"/>
            </div>
            <div className="aboutmetxt">
              <p>My name is Joe Langley, and I'm a front end web developer based in West London. I love to create websites from scratch that look great and respond well on all devices.</p>
              <p>When I'm not designing and creating projects, I love to travel, eat interesting food, discover new music and watch football!</p>
              <p>At the moment, I am available to make bespoke websites for small businesses. If you like what you hear and see, drop me a message in the box below.</p>
            </div>
          </div>
        </div>
      </section>
    </div>)
  }

}

export default About;
