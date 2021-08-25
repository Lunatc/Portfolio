import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
    return ( 
        <div className="works">

            <h2 className="title">Meus projetos</h2>
            <p className="title">ps: não há projeto momento</p>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80"
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>
                
            
        
    </div>  
    )
}