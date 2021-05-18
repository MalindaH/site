import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer container bg-dark text-white">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-12 col-sm-6">
                    <h5>Quick links</h5>
                    <ul className="list-unstyled quick-links">
                        <li>
                            <Link to='/site'><i className="fa fa-angle-double-right" />Home</Link>
                        </li>
                        <li>
                            <Link to='/site/about-me'><i className="fa fa-angle-double-right" />About Me</Link>
                        </li>
                        <li>
                            <Link to='/site/projects'><i className="fa fa-angle-double-right" />Projects</Link>
                        </li>
                        <li>
                            <Link to='/site/contact'><i className="fa fa-angle-double-right" />Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 contact-me">
                    <h5>Contact me</h5>
                    <ul className="list-unstyled list-inline social text-center">
                        <li className="list-inline-item"><a href="https://github.com/MalindaH" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/linhui-h/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="mailto:linhui.huang@mail.mcgill.ca" target="_blank"><i className="fas fa-envelope"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.youtube.com/c/MalindaHuang" target="_blank"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>	
            <div className="row">
                <div className="col-12 text-center">
                    <h6>Website developed by Linhui Huang (Malinda).</h6>
                </div>
            </div>
        </section>	
    )
}

export default Footer
