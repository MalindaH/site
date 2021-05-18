// rafce
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import logo from '../images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth < 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/site" className="navbar-brand" onClick={closeMobileMenu}>
                    <img className="logo" src={logo} alt='logo'/>
                </Link>
                {/* <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                {button && <Button buttonStyle='btn--outline'>Contact Me</Button>} */}

                <button className={click ? 'navbar-toggler collapsed' : 'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={click ? 'true' : 'false'} aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
                </button>

                <div className={click ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className='nav-item'>
                            <Link to='/site' className='nav-link' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/site/about-me' className='nav-link' onClick={closeMobileMenu}>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/site/projects' className='nav-link' onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/site/contact' className='nav-link' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
