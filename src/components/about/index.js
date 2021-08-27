import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
    return (  
        <div className="about">
            <div className="coluna_1">
                <StaticImage
                    src={`./../static/photo.jpg`}
                    alt="logo"
                    className="about_image"         
                />

                <h3>Some experiences:</h3>
                <ul>
                    <li><p>EccJr (Junior Enterprise) front-end developer volunteer</p></li>                  
                </ul>
            </div>
            <div className="coluna_2">
                    <p>My name is Cíntia <br></br>I’m a computer science student current looking forward to get my Covid-19 vaccine.</p>
                    <p>I’m in my 4th year of undergraduate studies and currently in my journey to find my area in computer science.</p>
                    <p>I've been studying Front-end Development with React/gatsby, design, HCI and some topics of UI/UX. </p>
                    <p>I also interested in AI, machine learning and, robotics, but doesn't know much yet.</p>
                    <p>Learning languages is part of my life. I'm improving my writen and spoken english. I'm studying french, in a beginner to intermediate level, and also, I've started learning korean this year. </p>
                    <p>I’m interested in many topics and hobbies like journaling, reading, drawing and painting.</p>     
            </div>

        </div>  
    )
}