import React from 'react'
import Typed from 'react-typed'
import bg from '../images/bg4.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-wrapper">
            <img className="main-background" src={bg} alt="background"/>
            <div className="main-info">
                <h1>Malinda (Linhui) Huang</h1>
                <Typed className="typed-text" 
                strings={["Software Development", "Machine Learning", "Web Development", "Data Analysis", "Game Development"]}
                typeSpeed={40}
                backSpeed={40}
                loop/>
                <Link to='/site/contact' className="header-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
