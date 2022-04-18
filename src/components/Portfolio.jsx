import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaPython, FaGitAlt, FaSass } from 'react-icons/fa'
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiUnitySmall, DiPostgresql, DiMongodb, DiDjango } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'

//https://i.ibb.co/XpjvMcr/image.png
//https://i.ibb.co/HhmPF6V/image.png
const sliderData = [
  { image: 'https://i.ibb.co/fC373NS/image.png', alt: 'BattleShip', link: 'https://brandonsamaroo.com/Battle-Ship/' }, //battleship
  { image: 'https://i.ibb.co/XpjvMcr/image.png', alt: 'Daily Community', link: 'https://dailycommunity.herokuapp.com/' }, //express
  { image: 'https://i.ibb.co/HhmPF6V/image.png', alt: 'Quizle', link: 'https://quizlesei.herokuapp.com/' }, //django
  { image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAAAflBMVEUAAAAxMTF+fn7///8QEBCbm5sXFxd2dnbGxsbz8/O0tLQ9PT3o6OgdHR2Hh4e5ubnMzMz4+PjV1dXf3984ODgiIiLDw8Otra2mpqZgYGBzc3NQUFDt7e0/Pz/b29uSkpJGRkZiYmJXV1czMzOnp6cqKiqNjY1NTU1qamqenp7nR0WdAAAIrUlEQVR4nO2c6XqqSBBAOxQuIMqm4AomRqPv/4LTKEt30wipkIzD1PlxP5FS4NhL9ZLLGEH8GavTG9GJ06pwZsYjoiOxmUsbG/9SCf8PYozzFyStOyQNAUlDQNIQkDQEJA0BSUNA0hCQNAQkDQFJQ0DSEJA0BCQNAUlDQNIQkDQEJA0BSUNA0hCQNAQkDQFJQ0DSEJA0BCQNAUlDQNIQkDQEJA0BSUNA0hCQNAQkDQFJQ0DSEJA0BCQNAUlDQNIQkDQEJA0BSUNA0hCQNAQkDQFJQ0DSEJA0BL8i7TjyQscJvctBf/5jHfDzydR4U8/MjXM9fGwsq4PNpnq9NOZq7OSj9vFddrUwcbear8bxC9KuCVjeLU3XgQ/Bpn5+4cB+OkrTOPQhUrQeIKp/YA2T6sDzqtcGTNVY31XeMMSrHbs/xTN6l3b2YFqaugbgmvL5Ywj2Ln895090k87OAGpFZQmitKngaQJwUYItWzo8hOBWVwvhs9MztNG3tON+LxWure+cxON3SKTCdQFPPJyBF6pf6SVWo7QLHOVgWdoVEun8BYIx+zk9SztZ6l0tHWdVHX2AWn12krUZvIFyI+/w4TdKY54vR0vSNvWr+UnzzXemZ2lhrZywpR+Ur+d+rRFiX2KdmQG7+XKFdlzWXD3HTGnWRGkrq361Xc0jgn6lpaDpL69+WWEjS/OhBezK1zNYmf6nfHa1apY252V3IYaL0lxLUxcv1qn+5jfpVZoJa93bZV6wFJ++Iqwq6AzOvE+cCSd5T3F+Jo3dpB9KkHZUK3p+k/p7/w69SuOl4ul5W1fQeGdRtea8TZMkMpu3Wc+lsXAvfJcgzRbf75VepXnB8/P6gshWflq8nMEp6y3ei+MTbBl7ey5tLOZ2grR93PG2v02v0iB9enoFmlQ3Iyhl36WxyCmOk6xjaZHGE4vq3itpR7h2u+vv06e0c8ttbqGhPYlLSTPIRkynIme93g/bpLHPqhWspF3VFK4/+pR2bLnNFBpOLMpu7iGNN+6PxtG65wet0lhYWq+kGX5vY02VPqXtpG6vTndp5uPZR48PtEt7K7MvQZol9Urj2M2RUhQUfUo71MeNEosmaem+qLe5NJ52HHmqktfSdmn8VX77lbQtCHMjmbTo4cySxm0o+pQ21ydGJR/QUGEipU3jJPzR3Dxn6CCN2Xm2Vkn7aPgJ3deSxix9SlHSJDUsc4ZSGn/kWdGvdJFWDOAqabVBbM6rSatKjB5HM1nGsmpdSiml8WebFolIJ2lHuOsS8rREb+fVpG30NeJcXCMF7cTM2i+b7Eram18OjzpJ481gFiVIW+j7pVeTxhztkMApJxZAl6SfhWmOShpLy7reTRpzM0mCtLGlndAI6lMf36Vfae+g6c/XVfm76IriVMgNZnKX96CjNNNJ+NhJmOVY6JLtiW5C/Zv0PJ8W10dKhjji9PzaWspNfLSfSGNfvCA74iTktJ5tb3zn1Upadp9b+Y1U+mXHof8ln4+laf4fScsKciJNdye+UrIXsLBfrU1jWcviCpn4zAN5pWMcSEspu1BODH4mjdd0R76cJy2lHDx+tZfrCDImPriPCjeeeGBt1fMp+PHj9z8bgbLw8VNpbK/8RrzwQbzJr+ZBeHzB3vPBxQGA/Z7/E+rGefM1P+Xfz3vvyrmDLk04iaUxkNY91UnP+hKAebtfzeJXC+6/ZdQy6deB39mWML/e7Hj03rhc9jZZ23H6fKTaH+fH1XqY586hvRwISBqCP5c2v0RBEkQLfWXZ2l4QePa2uSo1R+xqKeBpVwvqhT+WNnZ5e2x/xgloRlTLiPcfbhy7vCPR71V5FmFaltotjH5pPepvpR38cltGCnslX1iDU3S2puHohqlSRKhEmA6oyUTaMuuC5W+liTspTr70SGYip7kGhErB4RGLJxHm/qauhg1C2kiaGjrASDgKLWVHw2nvyO2WLkL4PtPaqvMBg5DmyJmnLawZRH5tKLDypeqmixDn+03LYJ68e2MQ0qSilc1KlP3dBNSxAcumvIV72urmecQI01qou5KGIU1ZQ6gqk34i3BU2n+lndISITBp7l+ZMBiFtqt8Ak62Gf+neFkbqV9DmXELEXRq7iVNog5B2BE+ftUb1vYB3qrWR9oiHNJYIP8wgpPGGybrotDkNG3xu0BYxKiNyaWNha+QwpLHlFMBbqOOdk36zX1Ypza4RhTS2qbK5gUjjrdCID6H2sdRZfjXtwVoWc5Jfut71EVFMwBXS+LiheGsw0jjm1d6DL6Qfu6ZNIOdi7fNJxLH41kJatTVySNIyljZUix5PylFe0o6tEYK0ebGWMzRpnKCslGe/4eITaIvYqh1BRrE1coDSmFf1jQ2b+9ffiBCksfhRrYcordqjazc8XTVQaI8QpeVbIwchTV1wK7dYbfTdp9DWbfSNmrAbWZK2vK9KDUHaRt0JGZXpfKhdV/OEmdfWCEkaM7JmbQjSzmppqTbzaXfOTMSJjU1bhCyNubxZG4I0tpfno01hSiKuJ2LKwm9bhCKNOSG7DEHaRN4dE4nV1VOL4TsoFdJTZ9TkCFXaF3waQ5DGNQnW1vKiQASfwrTreF3/U+sI4icRqjS2gOkgpPHnjh6VbLUN1WWQBfjrvAbu1n7tD63VCEv5fE0av1jDfNJP+es8zXDACr3A8cGrzTue13uwnCBwLNivayu/asSnEmH6qmbTGcS6Z8YujTzPnmi2VPHH3C1cz3Mvu+YV9uaIQ+3vJs8N/8XFT6G9HAhIGgKShoCkISBpCEgaApKGgKQhIGkISBoCkoaApCEgaQhIGgKShoCkISBpCEgaApKGgKQhIGkISBoCkoaApCEgaQhIGgKShoCkISBpCEgaApKGgKQhIGkISBoCkoaApCEgaQhIGgKShoCkISBpCEgaApKGgKQhIGkISBoCkoaApCEgaQhIGoJSmpkaREfS6m/BTaIj/075Jv6n/AOwtX3cDLCCHwAAAABJRU5ErkJggg==', alt: 'Crpyto', link: '' }, //react
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

