import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Banner() {

    return (    
      <div className="banner">
                <StaticImage
                    src="../../images/photo1.jpg"
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