import * as React from "react"
import './main.scss';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Banner from '../components/banner'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Content from '../components/content'



const IndexPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Content></Content>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage;
