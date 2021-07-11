import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    navbar
  } from './layout.module.css'


  const Layout = ({ pageTitle, children }) => {
    return (
      <main className={container}>
        <title>{pageTitle}</title>

        <nav className={navbar}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/works" className={navLinkText}>
                Works
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>

          </ul>
        </nav>




        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    )
  }

export default Layout