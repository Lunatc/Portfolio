import * as React from "react"
import './main.scss';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'

const ContactPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default ContactPage;
