import * as React from 'react';
import Navbar from '../components/navbar';
import Works from '../components/works';
import Footer from '../components/footer';
import './main.scss';

const WorksPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Works></Works>
      <Footer></Footer>
    </main>
  )
}


export default WorksPage