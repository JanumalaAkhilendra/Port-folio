import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="outerboxd">
                <div className="boxd">
                    <h2>PEEK INTO</h2>
                    <a href="#home">Home</a>
                    <a href="#educations">Education</a>
                    <a href="#Experience">Experience</a>
                </div>
                <div className="boxd">
                    <h2>ABOUT</h2>
                    <a href="#progressskills">Skills</a>
                    <a href="#projectsection">Projects</a>
                    <a href="#factz">Facts</a>
                </div>
                {/* <div className="boxd">
                    <h2>EQUILIBRIO</h2>
                    <p>Awesome series of events, is coming soon to take breath away!</p>
                </div> */}
            </div>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/janumala-akhilendra/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="mailto:janumalaakhilendra01122000@gmail.com">
                        <i className="fa fa-envelope"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://facebook.com/JanumalaAkhilendra">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://instagram.com/janumala_akhilendra">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/JanumalaAkhilendra">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            <div className="row copyright">
                <p>Copyright &copy; JanumalaAkhilendra</p>
            </div>
        </footer>
    );
};

export default Footer;
