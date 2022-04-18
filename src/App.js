import React, { Component } from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Background from './components/Background'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='section-container'>
          <Background />
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    )
  }
}

