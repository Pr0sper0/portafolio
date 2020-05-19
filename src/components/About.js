import React from 'react';
import { Animated } from 'react-animated-css';

export default function About() {
    return (
        <div className="main-content">
            {/* <!-- Section A: Info --> */}
            <section id="about-a" className="text-center py-3">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">
                        Let me tell you a little about myself and what I do...
        </p>
                    <div className="about-info">

                        <img src={require("../img/background/P50531-141010_small-min.jpg")} alt="" className="bio-image" />

                        <div className="bio bg-light">
                            <Animated animationInDelay="300" animationInDuration="3000" animationIn="fadeIn" isVisible={true}>
                                <h4>Your Project Is In Safe Hands</h4>
                                <p style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                                    <b>Hi! I am Valerii</b>, and I pretend to be a companion for your next Project.
                                    I practice in variant approaches to solve different assignments and I am sure we can find the best One!
                                    As for me I always try to be proactive and openminded in new challenges. I try to find a solution in minimal time to bring satisfaction to all of us.
                                    <div></div>
                                    <b>Striving for excellence motivates me. </b>
                                    I am not know-it-all person but I do my best to be empathetic both with friends and partners. Our goal is also my own goal. And we all are in one big boat
                                    trying to paddle to better coast!:)

            </p> </Animated>
                        </div>

                        <Animated animationInDelay="1000" animationIn="lightSpeedIn">
                            <div className="award-1">
                                <i className="fas fa-server fa-3x"></i>
                                <h3>Full-stack development</h3>
                                <p>
                                    I am Java oriented programmer with Experience in back-end as well as
                                    in front-end stack.
            </p>
                            </div></Animated>
                        <Animated animationInDelay="1250" animationIn="fadeInRight">
                            <div className="award-2">
                                <i className="fas fa-desktop fa-3x"></i>
                                <h3>Web development</h3>
                                <p>
                                    I am a good specialist in modern web-site technologies, Javascript and Frameworks.
            </p>
                            </div></Animated>
                        <Animated animationInDelay="1600" animationIn="wobble" >
                            <div className="award-3">
                                <i className="fas fa-database fa-3x"></i>
                                <h3>Data management</h3>
                                <p>
                                    I have a wide experience with different types of Databases.
            </p>
                            </div></Animated>
                    </div>
                </div>
            </section>

            {/* <!-- Section B: Progress Bars --> */}
            <section id="about-b" className="bg-dark py-3">
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="bottom-line"></div>
                    <div className="col-sm-3 my-skills">

                        <div className="skill-item">
                            <h4>Java</h4>
                            <div className="progress" data-progress-value="91">

                                <div style={{ width: '94%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <h4>JavaScript</h4>
                            <div className="progress">
                                <div style={{ width: '84%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>Spring MVC</h4>
                            <div className="progress">
                                <div style={{ width: '87%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>React</h4>
                            <div className="progress">
                                <div style={{ width: '92%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>Databases</h4>
                            <div className="progress">
                                <div style={{ width: '65%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>HTML & CSS</h4>
                            <div className="progress">
                                <div style={{ width: '85%' }}></div>
                            </div></div>
                    </div>
                </div>
            </section>

            {/* <!-- Section C: Logos --> */}
            <section id="about-c" className="py-4 bg-light">
                <div className="container">
                    <div className="about-logos">
                        <i className="fab fa-js fa-9x" />
                        <i className="fab fa-java fa-9x" />

                        <i className="fab fa-react fa-9x" />
                        <i className="fab fa-html5 fa-9x" />
                    </div>
                </div>
            </section>

            {/* <!-- Section D: Testimonials --> */}
            <section id="about-d" className="py-4">
                <div className="container">
                    <h2 className="section-title">Testimonials</h2>
                    <div className="bottom-line"></div>
                    <p className="lead text-center">Take a look at what my partners say...</p>
                    <div className="testimonials">
                        <div>
                            <p>
                                Valerii is an excellent technical expert, writes in several programming languages.
                                He knows how to properly motivate, listen and direct, working with him was a pleasure.
            </p>
                            <ul>
                                <li><img src={require("../img/testimonials/i_kholodniuk-min.jpg")} alt="" /></li>
                                <li>Ievgeniia Kholodniuk, QA specialist</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                I appreciate meeting with Valery. He is a highly skilled specialist, working with him makes
                                it easy to quickly understand information and build up own knowledge.
            </p>
                            <ul>
                                <li><img src={require("../img/testimonials/o_shovkoplias-min.jpg")} alt="" /></li>
                                <li>Oleksii Shovkoplias, Full-stack dev</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                I hope for a productive and no less effective work in the future!
            </p>
                            <ul>
                                <li><img src={require("../img/testimonials/i_onoprienko-min.jpg")} alt="" /></li>
                                <li>Ievgen Onoprienko, QA automation</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                In difficult situations, Valerii will not leave without help
            </p>
                            <ul>
                                <li><img src={require("../img/testimonials/i_voitushenko-min.jpg")} alt="" /></li>
                                <li>Ievgen Voitushenko, DB operationist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
