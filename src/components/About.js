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

                        <img src={require("../img/about_me.jpg")} alt="" className="bio-image" />

                        <div className="bio bg-light">
                            <Animated animationInDelay="300" animationInDuration="3000" animationIn="fadeIn" isVisible={true}>
                                <h4>Your Project Is In Safe Hands</h4>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
                                    nesciunt unde nihil voluptatum commodi consequuntur molestiae?
                                    Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
                                    deserunt!
            </p> </Animated>
                        </div>

                        <Animated animationInDelay="1000" animationIn="lightSpeedIn">
                            <div className="award-1">
                                <i className="fas fa-server fa-3x"></i>
                                <h3>Full-stack development</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                    magni!
            </p>
                            </div></Animated>
                        <Animated animationInDelay="1250" animationIn="fadeInRight">
                            <div className="award-2">
                                <i className="fas fa-desktop fa-3x"></i>
                                <h3>Web development</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                    magni!
            </p>
                            </div></Animated>
                        <Animated animationInDelay="1600" animationIn="wobble" >
                            <div className="award-3">
                                <i className="fas fa-database fa-3x"></i>
                                <h3>Data management</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                    magni!
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
                                <div style={{ width: '80%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>Spring MVC</h4>
                            <div className="progress">
                                <div style={{ width: '80%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>React</h4>
                            <div className="progress">
                                <div style={{ width: '92%' }}></div>
                            </div></div>
                        <div className="skill-item">
                            <h4>Databases</h4>
                            <div className="progress">
                                <div style={{ width: '60%' }}></div>
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
            {/* <section id="about-c" className="py-4 bg-light">
                <div className="container">
                    <div className="about-logos">
                        <img src="img/about-logos/logo-envato.png" alt="" />
                        <img src="img/about-logos/logo-wordpress.png" alt="" />
                        <img src="img/about-logos/logo-woocommerce.png" alt="" />
                        <img src="img/about-logos/logo-magento.png" alt="" />
                    </div>
                </div>
            </section> */}

            {/* <!-- Section C: Process --> */}
            <section id="home-c" className="text-center py-2">
                <div className="container">
                    <h2 className="section-title">
                        My creative process
                    </h2>
                </div>
                <div className="bottom-line"></div>
                <p className="lead">
                    Knowing what must be done does along with curiosity
                 </p>
                <div className="process">
                    <div>
                        <i className="fas fa-file-alt fa-4x process-icon my-2">
                            <div className="process-step">1</div>
                        </i>
                        <div className="clr"></div>
                        <h3>Discuss the project</h3>
                        <p>
                            Discuss and conceptualize the idea. Any app starts with an idea and offers an alternative solution for an particular situation.
                            Even good ideas are uncoditional in the
                            beginning. Project development  must be well-prepared and discussed.
          </p>
                    </div>
                    <div>
                        <i className="fas fa-desktop fa-4x process-icon my-2">
                            <div className="process-step">2</div>
                        </i>
                        <div className="clr"></div>
                        <h3>Brainstorming steps</h3>
                        <p>
                            Identifies all of the work to be done. The project’s tasks and resource requirements are identified,
                            along with the strategy for producing them. identify the work, prepare the schedule, and estimate the costs
                            are the three fundamental components of the planning process
          </p>
                    </div>
                    <div>
                        <i className="fas fa-object-ungroup fa-4x process-icon my-2">
                            <div className="process-step">3</div>
                        </i>
                        <div className="clr"></div>
                        <h3>Implementation phase</h3>
                        <p>
                            It is important to maintain control and communicate as needed during implementation.
                            Progress is continuously monitored and appropriate adjustments are made and recorded as variances from the original plan.
          </p>
                    </div>
                    <div>
                        <i className="fas fa-thumbs-up fa-4x process-icon my-2">
                            <div className="process-step">4</div>
                        </i>
                        <div className="clr"></div>
                        <h3>Closing/delivery phase</h3>
                        <p>
                            Release the final deliverables to the customer, handing over project documentation to the business,
                            releasing project resources, and communicating the closure of the project to all stakeholders.
          </p>
                    </div>
                </div>
            </section>

            {/* <!-- Section D: Testimonials --> */}
            <section id="about-d" className="py-4">
                <div className="container">
                    <h2 className="section-title">Testimonials</h2>
                    <div className="bottom-line"></div>
                    <p className="lead text-center">Take a look at what my clients say...</p>
                    <div className="testimonials">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                                sint? Non, fugit!
            </p>
                            <ul>
                                <li><img src="img/testimonials/person1.jpg" alt="" /></li>
                                <li>Sam Smith, New York</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                                sint? Non, fugit!
            </p>
                            <ul>
                                <li><img src="img/testimonials/person2.jpg" alt="" /></li>
                                <li>Sara Williams, Michigan</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                                sint? Non, fugit!
            </p>
                            <ul>
                                <li><img src="img/testimonials/person3.jpg" alt="" /></li>
                                <li>Jill Johnson, London</li>
                            </ul>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                                sint? Non, fugit!
            </p>
                            <ul>
                                <li><img src="img/testimonials/person4.jpg" alt="" /></li>
                                <li>Steve Thompson, Boston</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
