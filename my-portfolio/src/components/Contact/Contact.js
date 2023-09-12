import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import GithubIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'

function Contact() {
  return (
    <section id ='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'> My Clients </h1>
            <p className='clientDesc'>
                I have had the privilege to work for diverse group of companies.
                Some of these notable companies include
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Walmart' className='clientImg'/>
                <img src={Adobe } alt='Adobe ' className='clientImg'/>
                <img src={Microsoft} alt='Microsoft' className='clientImg'/>
                <img src={Facebook} alt='Facebook' className='clientImg'/>
            </div>
        </div>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out this form to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Enter Your Name' />
                <input type='email' className='email' placeholder='Enter Your email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt=' FacebookIcon' className='link'/>
                    <img src={TwitterIcon } alt='TwitterIcon ' className='link'/>
                    <img src={GithubIcon} alt='GithubIcon' className='link'/>
                    <img src={InstagramIcon} alt='InstagramIcon' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact