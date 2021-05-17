import React from 'react'
import Typed from 'react-typed'
import bg from '../images/bg4.jpg'

const Header = () => {
    return (
        <div className="header-wrapper">
            <img className="main-background" src={bg} alt="background"/>
            <div className="main-info">
                <h1>Linhui Huang (Malinda)</h1>
                <Typed className="typed-text" 
                strings={["Web Design", "Web Development", "Software Development", "Game Development"]}
                typeSpeed={40}
                backSpeed={40}
                loop/>
                <a className="header-button" href="/contact">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
