import * as React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import Footer from '../components/footer';
import './main.scss';

const AboutPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </main>
  )
}


export default AboutPage