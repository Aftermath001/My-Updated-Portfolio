import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import  introPic from '../../assets/Bg.png'

function Intro() {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Alvin Adams</span> <br />Software Developer</span>
            <p className='introPara'>I am a skilled developer with experience in developing visually appealing and user friendly websites and applications</p>
            <Link><button className='btn'><h3 className='btnTxT'>Hire Me</h3></button></Link>
        </div>

        <img src={introPic} alt='Profile' className='bg'/>

    </section>
  )
}

export default Intro