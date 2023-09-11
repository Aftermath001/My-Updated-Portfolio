import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import Webdesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'


function Skills() {
  return (
    <section id ="skills">
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>
            I am a skilled software developer who leverages my expertise in coding 
            and problem-solving to craft innovative and efficient software solutions. 
            My dedication to continuous learning and adaptability ensures I stay at the 
            forefront of the ever-evolving tech landscape.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX DESIGN</h2>
                    <p>My journey as a software engineer has been enriched by my passion for UI/UX design. I have honed my design skills by continually pushing the boundaries of creativity and usability.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Webdesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>WEB DESIGN</h2>
                    <p>My proficiency in web design as a software engineer is a result of my comprehensive skill set, encompassing both the technical and creative aspects of web development</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Appdesign} alt='App Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>APP DESIGN</h2>
                    <p>My unique strength lies in my ability to seamlessly integrate design and development, allowing me to create apps that are both visually stunning and highly functional</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills