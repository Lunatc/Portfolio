import React from 'react';
import { Link } from "gatsby";


export default function Navbar() {

  /*const changeBackground = () => {

    if(window.scrollY < 530){
      document.getElementById("nav").style.backgroundColor ='#FFF7EF';
    }
    
    else if(window.scrollY >= 530 && window.scrollY < 1076) {
      document.getElementById("nav").style.backgroundColor = "#FFCBA4";
    }

    else if(window.scrollY >= 1076 && window.scrollY < 1460) {
      document.getElementById("nav").style.backgroundColor = "#C2956B";
    }
  }
  
  window.addEventListener('scroll', changeBackground);*/
  

  return (
    <section className="navbar" id="nav">
      <div className="navbar__content">
        <div className="navbar__links">
          <Link to="/about" activeClassName="underline"> About </Link>
          <Link to="/works" activeClassName="underline">Works</Link>
          <Link to="/" className="nav_central" activeClassName="underline_main">Cíntia</Link>
          <Link to="/">Blog</Link>
          <Link to="/contact" activeClassName="underline">Contact</Link>
        </div>
      </div>
    </section>
  )
}