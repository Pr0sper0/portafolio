import React from 'react'

export default function Contact() {
    return (
        <div className="main-content">
            {/* <!-- Section A: Contact Form --> */}
            <section id="contact-a" className="text-center py-3">
                <div className="container">
                    <h2 className="section-title">
                        Contact Me
        </h2>
                    <div className="bottom-line"></div>
                    <p className="lead">Here is how you can reacm me</p>
                    <form>
                        <div className="text-fields">
                            <input
                                className="text-input name-input"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                className="text-input subject-input"
                                type="text"
                                placeholder="Subject"
                            />
                            <input
                                className="text-input email-input"
                                type="email"
                                placeholder="Email address"
                            />
                            <input
                                className="text-input phone-input"
                                type="text"
                                placeholder="Phone Number"
                            />
                            <textarea
                                className="text-input message-input"
                                type="text"
                                placeholder="Enter Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-dark">Submit</button>
                    </form>
                </div>
            </section>

            {/* <!-- Section B: COntact Info --> */}
            <section id="contact-b" className="py-3 bg-dark">
                <div className="container">
                    <div className="contact-info">
                        <div>
                            <i className="fas fa-envelope fa-2x"></i>
                            <h3>Email</h3>
                            <p>valeriita1ov@gmail.com</p>
                        </div>
                        <div>
                            <i className="fas fa-phone fa-2x"></i>
                            <h3>Phone</h3>
                            <p>(067) 224-18-63</p>
                        </div>
                        <div>
                            <i className="fas fa-address fa-2x"></i>
                            <h3>Address</h3>
                            <p>Kolomyis'ky ln, 17/31a</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section C: Tagline --> */}
            <section id="contact-c" className="bg-main py-4">
                <div className="container">
                    <h1>Let's Talk To Me</h1>
                </div>
            </section>
        </div>
    )
}
