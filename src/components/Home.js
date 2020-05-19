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

                <section id="home">
                   {/* <!-- Section: My Process --> */}
                    <div id="home-c" className="text-center py-2">
                        <div className="container">
                            <h4>My creative process descibed as</h4>
                            
                            <h3 className="lead">
                                Knowing what must be done does along with curiosity
                                
                            </h3>
                        </div>


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
                    </div>

               </section>
            </div>
        </div >
    )
}
