// import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import database from '../assets/database.png'
import mongodb from '../assets/mongodb.png'
import nodejs from '../assets/node-js.png'
import react from '../assets/react.png'
import git from '../assets/git.png'
import './AboutPage.css'
const AboutPage = ({ theme, setTheme }) => {
    return (
        <div className="aboutpage">
            <div className='about'>
                <img src={css} alt="" />
                <img src={database} alt="" />
                <img src={html} alt="" />
                <img src={mongodb} alt="" />
                <img src={nodejs} alt="" />
                <img src={react} alt="" />
                <img src={git} alt="" />
            </div>
        </div>
    )
}

export default AboutPage;
