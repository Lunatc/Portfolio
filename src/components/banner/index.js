import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Banner() {

    return (    
      <div className="banner">
                <StaticImage
                    src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                    alt="logo"
                    className="banner_image"         
                />
                <div className="banner_text">
                    <h1>Hi, I’m Cíntia. <br></br> A computer science student.</h1>
                    <p>I’m also studying UI/UX. I love learning new topics, travelling and cute stuff.</p>
                    <Link to="/about" className="link">More about me</Link>
                </div>
                
        </div>  
    )
}