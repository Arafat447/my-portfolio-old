import React from 'react';
import Navbar from '../Navigation/Navbar';
import './Contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_kcnerll', 'template_02vvvjm', e.target, 'user_A3iJxsbRLSG5nzya1PoaR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <div className="contact-container">
            <Navbar></Navbar>
            <h1 className="display-4 text-center text-white mt-4 pt-4">Get In Touch</h1>
            <h4 className="text-center my-4 text-white py-4">Send Me Email</h4>
            <div className="container">
                <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 mx-auto pt-2 form-group">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 mx-auto pt-2 form-group">
                        <input type="text" className="form-control" placeholder="Email" name="email"/>
                    </div>
                    <div className="col-8 mx-auto pt-2 form-group">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 mx-auto pt-2 form-group">
                        <textarea className="form-control" placeholder="Your message" name="message" id="" cols="30" rows="8"></textarea>
                    </div>
                    <div className="col-8 mx-auto pt-2 form-group">
                        <input type="submit" className="btn btn-primary" value="Send message"/>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;