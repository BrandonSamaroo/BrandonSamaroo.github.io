import React, { Component } from 'react'
import {Link} from 'react-scroll'
import {BsGithub, BsBriefcase} from 'react-icons/bs'
import {AiFillHome, AiOutlineProfile, AiOutlineMessage, AiOutlineLinkedin} from 'react-icons/ai'

export default class NavBar extends Component {
  render() {
    return (
        <nav>
            <ul className='nav-bar'>
                <li className='nav-item'><Link activeClass="active" to="home" spy={true} smooth={true} alt="home" className="scroll-item"><AiFillHome className='icon'/></Link></li>
                <li className='nav-item'><Link to="about" spy={true} smooth={true} className="scroll-item"> <AiOutlineProfile className='icon'/> </Link></li>
                <li className='nav-item'><Link to="portfolio" spy={true} smooth={true} className="scroll-item"> <BsBriefcase className='icon'/> </Link></li>
                <li className='nav-item'><Link to="contact" spy={true} smooth={true} className="scroll-item"> <AiOutlineMessage className='icon'/> </Link></li>
                <li className='nav-item'><a className='nav-link' href='https://github.com/BrandonSamaroo' target="_blank" rel="noreferrer"><BsGithub className='icon'/></a></li>
                <li className='nav-item'><a className='nav-link' href='https://www.linkedin.com/in/brandon-samaroo-330bab217/' target="_blank" rel="noreferrer"><AiOutlineLinkedin className='icon'/></a></li>
            </ul>
        </nav>
    )
  }
}