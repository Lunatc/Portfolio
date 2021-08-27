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
                        src={`../../static/photo2.jpg`}
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src={`../../static/photo3.jpg`}
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src={`../../static/photo4.jpg`}
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>

            <div className="work_link">
                <a href="https://github.com/Lunatc">
                    <StaticImage
                        src={`./../static/photo5.jpg`}
                        alt="logo"
                        className="work_image"         
                    />
                </a> 
            </div>
                
            
        
    </div>  
    )
}