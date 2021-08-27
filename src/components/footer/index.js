import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/font-awesome';


export default function Footer() {
    return (
    <footer>       
        <div className="footer_content">
                <Link to="/Portfolio/about">About</Link>
                <Link to="/Portfolio/works">Works</Link>
                <Link to="/">Blog</Link>
                <Link to="/Portfolio/contact">Contact</Link>
        </div>

        <div className="footer_icones">

            <a href='https://github.com/Lunatc'>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
            </a>

            <a href='https://twitter.com/Little_lunatc'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
            </a>

            <a href='https://www.linkedin.com/in/cintia-braz/'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
        </div>

        <div className="footer_end">
            <p>Feito na força do odio</p>
        </div>
      </footer>
    )
}