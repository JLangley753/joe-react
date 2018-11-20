import React, { Component } from 'react';
import './Footer.css';
import gh from '../../img/gh.png';
import li from '../../img/li.png';
import ig from '../../img/ig.png';
import tw from '../../img/tw.png';

class Footer extends Component {
  render() {
    return(<footer><p>This website was designed and created by <a href="#toppage">Joe Langley</a></p>
  <div className="footersocials">
    <a href="https://github.com/JLangley753" target="_blank "rel="noopener noreferrer" ><img src={gh} alt="GitHub"/></a>
  <a href="https://www.linkedin.com/in/joelangley7/" target="_blank" rel="noopener noreferrer" ><img src={li} alt="LinkedIn"/></a>
  <a href="https://www.instagram.com/joe_langley7" target="_blank" rel="noopener noreferrer" ><img src={ig} alt="Instagram"/></a>
  <a href="https://twitter.com/TheJoeL573" target="_blank" rel="noopener noreferrer" ><img src={tw} alt="Twitter"/></a>
  </div>
    </footer>)
  }
}

export default Footer;
