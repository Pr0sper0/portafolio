import React from 'react';

export default function Portfolio() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return (
        <div className="main-content">
            {/* <!-- Section A: Gallery --> */}
            <section id="work-a" className="text-center py-3">
                <div className="conainer">
                    <h2 className="section-title">My work</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">
                        Check out some of my projects
            </p>
                    <div className="items">
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/thumbs/item1_3-min-min.png")} alt="" className="image-thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
                                <img onLoad={() => { setIsLoaded(true) }} src={require("../img/items/item1_3-min.png")} alt="" className="image-full" style={{ opacity: isLoaded ? 1 : 0 }} />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <a target="_blank" href="https://dailymanagement.herokuapp.com/">
                                        <p className="item-text-category">Daily management tool</p>
                                    </a>
                                    <h2 className="item-text-title">Spring MVC+Security/React/MySQL</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/thumbs/item2_2-min-min.png")} alt="" className="image-thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
                                <img onLoad={() => { setIsLoaded(true) }} src={require("../img/items/item2_2-min.png")} alt="" className="image-full" style={{ opacity: isLoaded ? 1 : 0 }} />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <a target="_blank" href="https://kinopanorama.netlify.app/">
                                        <p className="item-text-category">Ukrainian movies</p>
                                    </a>
                                    <h2 className="item-text-title">MERN + Strapi CMS</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/thumbs/item3_1-min.png")} alt="" className="image-thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
                                <img onLoad={() => { setIsLoaded(true) }} src={require("../img/items/item3_1.png")} alt="" className="image-full" style={{ opacity: isLoaded ? 1 : 0 }} />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <a target="_blank">
                                        <p className="item-text-category">Delivery Food service</p>
                                    </a>
                                    <h2 className="item-text-title">Node/React/Bootstrap</h2>
                                </div>
                            </div>
                        </div>

                        {/* <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/item1_1.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Design</p>
                                    <h2 className="item-text-title">Gap INC</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/item3_3.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Portfolio design</p>
                                    <h2 className="item-text-title">Face the experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/item1_1.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Full Stack development</p>
                                    <h2 className="item-text-title">Quiz Application</h2>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div >
    )
}
