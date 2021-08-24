import React from 'react';

export default function Contact() {
    return (    
      <div className="contact">
            <h2 className="title">Contact</h2>

            <p className="link">This form is not working yet, please contact me in social media</p>

            <div className="contact_form">
                <form method="post" action="#">
                    <div className="namemail">
                        <input type="text" className="name" placeholder="Name"></input>
                        <input type="email" className="email" placeholder="Email"></input>
                    </div>

                    <div className="subject">
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    
                    <div className="message">
                        <textarea type="text" placeholder="Message"></textarea>
                    </div>

                    <div className="send">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div> 
        </div>  
    )
}