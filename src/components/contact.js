import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information</p>
        <form>
          <div className="row">
            <div className="col-12 col-md-6">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="col-12 col-md-6">
              <input type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <textarea placeholder="Message" required></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
