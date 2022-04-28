import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaPython, FaGitAlt, FaSass } from 'react-icons/fa'
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiUnitySmall, DiPostgresql, DiMongodb, DiDjango } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'

//https://i.ibb.co/XpjvMcr/image.png
//https://i.ibb.co/HhmPF6V/image.png
const sliderData = [
  { image: 'https://i.ibb.co/SxgYj2m/1486722.jpg', alt: 'BattleShip', link: 'https://brandonsamaroo.com/Battle-Ship/' }, //battleship
  { image: 'https://i.ibb.co/2g4s678/3308619.jpg', alt: 'Daily Community', link: 'https://quizlesei.herokuapp.com/' }, //express
  { image: 'https://i.ibb.co/XZ3G3dP/teahub-io-lovely-friends-wallpapers-1103189.jpg', alt: 'Quizle', link: 'https://dailycommunity.herokuapp.com/' }, //django
  //add react app here
]



export default function Portfolio() {
  const length = sliderData.length;
  const [current, setCurrent] = useState(0);
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <div id="portfolio" className='content-section'>
      <h3>Projects</h3>
      <section className='slider'>
        <FaArrowAltCircleLeft className="left" onClick={previousSlide} />
        {sliderData.map((slide, idx) =>
        (
          <a href={slide.link} target="_blank" rel="noreferrer" className={idx === current ? 'slide active' : 'slide'} key={idx}>
            {idx === current && (<img src={slide.image} alt={slide.alt} className="image"></img>)}
          </a>
        )
        )}
        <FaArrowAltCircleRight className="right" onClick={nextSlide} />
      </section>
      <h3>Skills</h3>
      <div className='skills-container'>
        <FaPython className='skill-icon' />
        <DiJavascript1 className='skill-icon' />
        <DiHtml5 className='skill-icon' />
        <DiCss3 className='skill-icon' />
        <DiReact className='skill-icon' />
        <DiNodejsSmall className='skill-icon' />
        <DiUnitySmall className='skill-icon' />
        <DiPostgresql className='skill-icon' />
        <DiMongodb className='skill-icon' />
        <SiExpress className='skill-icon' />
        <DiDjango className='skill-icon' />
        <FaGitAlt className='skill-icon' />
        <FaSass className='skill-icon' />
      </div>
    </div>
  )
}

