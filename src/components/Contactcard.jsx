import React from 'react'
import   { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactcard = () => {

        const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4ilhnyc', 'template_vakqw3n', form.current, 'Wz0a-upaGN6c2IWxE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

    
    return (
        <>
        
     
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" name="to_name" id="user_name" placeholder="Your Name" />
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" name="from_name" class="form-control" id="user_email" placeholder="Your Email" />
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" name="message" className="form-control" id="subject" placeholder="Subject" />
                                <label for="subject" name="subject">Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" name="message" id="message"
                                    style={{ height: "150px" }}></textarea>
                                <label for="message" name="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn   py-3 px-5"  value="Send" type="submit" style={{ backgroundColor:'#0b6ab2',color:'white'}}>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactcard
