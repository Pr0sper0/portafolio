import React from 'react';
import { Animated } from 'react-animated-css';

class Experience extends React.Component {
    items = document.querySelectorAll('#timeline li')
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };

    }



    render() {
        return (
            <div className="main-content" >
                <div id="experience-header">
                    <div className="container">
                        <h1><i className="fas fa-brain">Experience timeline</i></h1>
                        {/* <h3><i className="fas fa-user">Valerii Tarasov</i></h3> */}
                    </div>
                </div>
                <section id="timeline">
                    <ul>

                        <li className="show">
                            <Animated animationInDelay="250" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">July 2020 – till now </i>
                                </h3>
                                <h4>Ciklum </h4>

                                -	Application for trading system data operation. Engineering of a new Data management system based on web-based Add-in and Excel JavaScript API;
                                <p>
                                    Technologies: React.js; Node; Typescript; Excel JavaScript API; HTML/CSS; Webpack;
                                </p>
                            </Animated>
                        </li>

                        <li className="show">
                            <Animated animationInDelay="750" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">November 2018 – early 2020 </i>
                                </h3>
                                <h4>GlobalLogic </h4>

                                -	Development of new Information Collection System.
                                <p>
                                    Technologies: React.js, Spring Rest, JavaScript, Oracle/SQL, HTML/CSS
                                </p>
                            </Animated>
                        </li>

                        <li className="show">
                            <Animated animationInDelay="1250" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">March 2015 - June 2020 </i>
                                </h3>
                                <h4>GlobalLogic </h4>

                                -	Development and	Maintenance engineering in Java products using desktop and web specification.
                                <p>
                                    Technologies: Java SE, Java EE, JSP, JavaScript, HTML, CSS, Shell, XML, SQL; Apache, Tomcat, IIS
                                </p>
                            </Animated>
                        </li>

                        <li className="show">
                            <Animated animationInDelay="1750" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">July 2014 – March 2015 </i>
                                </h3>
                                <h4>Kyivstar Telecom </h4>

                                -   Development and Maintenance of customer-service applications;
                                -	Customer support with SMS/MMS advertising services;
                                -	fetch on request from the RDBMS(ORACLE);

                                <p>
                                    Technologies: Java EE, JSP, HTML, XML, SQL
                                </p>
                            </Animated>
                        </li>
                        <li className="show">
                            <Animated animationInDelay="2250" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">May 2013 – July 2014 </i>
                                </h3>
                                <h4>Government Enterprise “Antonov”  </h4>

                                -   Development of new Document management system

                                <p>
                                    Technologies: Java EE, JPA, JSP, JSF, JavaScript;
                                    Glassfish Server; RDBMS: MySQL; Web: XHTML, CSS;
                                </p>
                            </Animated>
                        </li>
                        <li className="show">
                            <Animated animationInDelay="2750" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">March 2011 - May 2013</i>
                                </h3>
                                <h4>Government Enterprise “Antonov”  </h4>

                                - Desktop applications development for aviation flight analysis;

                                <p>
                                    Technologies: C++ GUI, MFC;
                                </p>
                            </Animated>
                        </li>
                        <li className="show">
                            <Animated animationInDelay="3250" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">February 2010 - March 2011</i>
                                </h3>
                                <h4>BookStore marketing </h4>

                                - Financial turnover analysis;

                                <p>
                                    Technologies: Access, Excel, 1C;
                                </p>
                            </Animated>
                        </li>
                        <li className="show">
                            <Animated animationInDelay="3750" animationIn="fadeInUp">

                                <h3>
                                    <i className="fas fa-chevron-right">February 2008 - June 2009</i>
                                </h3>
                                <h4>Bank "Pravex" </h4>

                                - Financial and credit history analysis;

                                <p>
                                    Technologies: Access, Excel;
                                </p>
                            </Animated>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Experience;
