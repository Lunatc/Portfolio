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
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="project_image"         
                    /></a>
                <a href="https://github.com/Lunatc"><StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="project_image"         
                    /></a>
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="project_image"         
                    />
                </a>
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="project_image"         
                    />
                </a> 
            </div>
            <Link to="/works" className="link">See more...</Link>              
        </div>  
    
    )
}