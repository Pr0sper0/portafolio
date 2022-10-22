import React, { useState, useEffect } from 'react';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';

export default function Navigation() {

    const [current, setCurrent] = useState(0);

    return (
        <React.Fragment>
            <Hamburger />
            {/* Main menu */}
            <aside>
                <div id="header" className="header-content">
                    {/* Header mobile  */}
                    <div className="header-mobile"></div>
                    {/* Header Desktop  */}
                    <div className="header-main">
                        <div id="text-center">
                            <div
                                className="folio-image"
                            >
                            </div>
                            <h2 id="folio-logo">
                                <a href="index.html">Valerii Tarasov</a>
                            </h2>
                        </div>
                        <nav id="main-nav">
                            <ul>
                                <li><Link to="/" onClick={() => setCurrent(1)} className={(current === 1) ? "current" : ""}>Home</Link></li>
                                <li><Link to="/about" onClick={() => setCurrent(2)} className={(current === 2) ? "current" : ""} >About me</Link></li>
                                <li><Link to="/experience" onClick={() => setCurrent(3)} className={(current === 3) ? "current" : ""}>Experience</Link></li>
                                <li><Link to="/portfolio" onClick={() => setCurrent(4)} className={(current === 4) ? "current" : ""}>Portfolio</Link></li>
                                <li><Link to="/contact" onClick={() => setCurrent(5)} className={(current === 5) ? "current" : ""}>Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Footer  */}
                        <footer id="main-footer">
                            <div className="footer-content container">
                                <div className="social">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-github"></i>
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <p>Copyright &copy; 2022. All Rights Reserved</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </aside>
        </React.Fragment >
    )
}
