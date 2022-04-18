import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div id="about" className='content-section'>
        <h3>Who is Brandon?</h3>
        <img src='https://i.ibb.co/9pn0N1m/me.jpg' alt='me' id='profile-pic'></img>
        <p>
          I'm a 25 year old Software Developer from Toronto, with a previous background in Game Development. 
          <br/>
          <br/>
          As i was exploring other worlds of tech while journeying through Game Development and Design at Centennial College i became infactuted with web development and decided to switch my focuses towards it.
          the problem solving and raw coding involved on the web was something that fit my passions better than game development so after a year of self learning i decided to attend General Assembly to polish my skills.
          <br/>
          <br/>
          Problem solving is the reason coding has become such a passion for me and with the amount of avenues to explore in tech its a never ending journey. Aside from coding some more passions and hobbys i have include fitness, gaming, video editing, and cooking
        </p>
      </div>
    )
  }
}
