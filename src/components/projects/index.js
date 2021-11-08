import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Projects() {
    return (  
        <div className="projects">
            <h2 className="title">Projects</h2>

            <a className="link" href="https://github.com/Lunatc">
                    Sorry, I don't have any project to show yet, but you can still check my github profile ;)
            </a>

            <div className="project_images">
                

                <a href="https://github.com/Lunatc"><StaticImage
                        src={`../../images/photo2.jpg`}
                        alt="logo"
                        className="project_image"         
                    /></a>
                <a href="https://github.com/Lunatc"><StaticImage
                        src={`../../images/photo3.jpg`}
                        alt="logo"
                        className="project_image"         
                    /></a>
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src={`../../images/photo4.jpg`}
                        alt="logo"
                        className="project_image"         
                    />
                </a>
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src={`../../images/photo5.jpg`}
                        alt="logo"
                        className="project_image"         
                    />
                </a> 
            </div>
            <Link to="/Portfolio/works" className="link">See more...</Link>              
        </div>  
    
    )
}