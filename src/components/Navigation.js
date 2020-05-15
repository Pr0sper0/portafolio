import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <React.Fragment>
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
                                <li><Link to="/" className="current">Home</Link></li>
                                <li><Link to="/about">About me</Link></li>
                                <li><Link to="/experience">Experience</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
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
                                <p>Copyright &copy; 2020. All Rights Reserved</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </aside>
        </React.Fragment >
    )
}
