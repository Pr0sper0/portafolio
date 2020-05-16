import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="main-content">
            <div id="main" className="site-main">
                <div id="main-home">
                    <h1>
                        I Am Valerii The
            <span
                            className="txt-type"
                            data-wait="2000"
                            data-words='["FullStack Dev", "UI/UX Dev", "Software Eng"]'
                        ></span>
                    </h1>
                    <p className="lead">I specialize in Software development</p>
                    <Link to="/Portfolio" className="btn-light">View My Work</Link>
                </div>

                {/* Section A: Specialize  */}
                <section id="home">
                    <div id="home-a" className="text-center py-3">
                        <div className="container">
                            <h2 className="section-title">I Specialize in</h2>
                            <div className="bottom-line"></div>
                            <p className="lead">
                                FullStack software engineering and UI/UX development
              </p>
                            <div className="specials">
                                <div>
                                    <i className="fas fa-file-alt fa-2x"></i>
                                    <h3>Concepting</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aut modi distinctio non, quibusdam nihil, blanditiis
                                        assumenda ipsum architecto, dolores corrupti eveniet? Odit
                                        reprehenderit necessitatibus ad ducimus sint vitae deleniti
                                        neque!
                  </p>
                                </div>
                                <div>
                                    <i className="fas fa-desktop fa-2x"></i>
                                    <h3>UI/UX</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aut modi distinctio non, quibusdam nihil, blanditiis
                                        assumenda ipsum architecto, dolores corrupti eveniet? Odit
                                        reprehenderit necessitatibus ad ducimus sint vitae deleniti
                                        neque!
                  </p>
                                </div>
                                <div>
                                    <i className="fas fa-object-ungroup fa-2x"></i>
                                    <h3>FullStack</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aut modi distinctio non, quibusdam nihil, blanditiis
                                        assumenda ipsum architecto, dolores corrupti eveniet? Odit
                                        reprehenderit necessitatibus ad ducimus sint vitae deleniti
                                        neque!
                  </p>
                                </div>
                                <div>
                                    <i className="fas fa-vector-square fa-2x"></i>
                                    <h3>Interaction</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Aut modi distinctio non, quibusdam nihil, blanditiis
                                        assumenda ipsum architecto, dolores corrupti eveniet? Odit
                                        reprehenderit necessitatibus ad ducimus sint vitae deleniti
                                        neque!
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section B:Stats  */}
                    <div id="home-b" className="text-center py-3">
                        <div className="stats">
                            <div>
                                <ul>
                                    <li><i className="fas fa-users fa-3x"></i></li>
                                    <li className="stats-title">Clients</li>
                                    <li className="stats-number">100</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="fas fa-award fa-3x"></i></li>
                                    <li className="stats-title">Awards</li>
                                    <li className="stats-number">3</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="fas fa-hourglass-start fa-3x"></i></li>
                                    <li className="stats-title">Hours Worked</li>
                                    <li className="stats-number">100</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="fas fa-code-branch fa-3x"></i></li>
                                    <li className="stats-title">Projects Completed</li>
                                    <li className="stats-number">6</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
