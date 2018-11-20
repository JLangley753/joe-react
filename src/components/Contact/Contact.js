import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
  handleClick(e) {
    e.preventDefault();

    var modal = document.getElementById('myModal');
    var tyModalContent = document.getElementById('tyModalContent');
    var form = document.getElementById('contactform');
    var sadmodal = document.getElementById('sadModal');
    var sadModalContent = document.getElementById('sadModalContent');

    var a = document.forms['contactform']['name'].value;
    var b = document.forms['contactform']['mail'].value;
    var c = document.forms['contactform']['howcanihelp'].value;
    if (!a || !b || !c) {
      sadmodal.classList.add('showmodal');
      sadModalContent.classList.add('show-modal-content');
      setTimeout(function autoclosesad() {
        sadmodal.classList.remove('showmodal');
        sadModalContent.classList.remove('show-modal-content');
      }, 2800);
    } else if (a || b || c) {
      modal.classList.add('showmodal');
      tyModalContent.classList.add('show-modal-content');
      setTimeout(function autoclose() {
        modal.classList.remove('showmodal');
        tyModalContent.classList.remove('show-modal-content');
        form.reset();
      }, 2800);
    }
  }

  render() {
    return (<div className="contact-section-wrap">
      <div className="pagebar content"></div>

      <div className="modal" id="myModal">
        <div className="modal-content" id="tyModalContent">
          <h2>Form Submitted!</h2>
          <h3>Thank you for your email, I will get back to you shortly.</h3>
        </div>
      </div>

      <div className="modal sadmodal" id="sadModal">
        <div className="modal-content" id="sadModalContent">
          <h2>Please fill in all form fields!</h2>
        </div>
      </div>

      <section className="contactus content" id="contact">
        <h2>Contact</h2>
        <div className="contactwrap">
          <div className="contactformsection">
            <form name="contactform" id="contactform">
              <input type="text" name="name" placeholder="Your name.." className="formbox"/>
              <input type="text" name="mail" placeholder="Your email.." className="formbox"/>
              <textarea name="howcanihelp" cols="10" rows="4" className="formbox letschat" placeholder="Let's chat.."></textarea>
              <button id="contactbutton" className="submitbutton" type="submit" name="submit" onClick={this.handleClick}>Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>)
  }
}

export default Contact;
