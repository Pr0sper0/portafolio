import React from 'react';

export default function Portfolio() {
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
                                <img src={require("../img/items/item1_1.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Design</p>
                                    <h2 className="item-text-title">Great Gradients</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/item3_3.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">UI/UX</p>
                                    <h2 className="item-text-title">World Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={require("../img/items/item1_1.png")} alt="" />
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">Software Development</p>
                                    <h2 className="item-text-title">Vanishing</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item">
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}