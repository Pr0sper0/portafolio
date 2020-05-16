import React from 'react';
import { Animated } from "react-animated-css";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "", subject: "", email: "", phone: "", message: ""
        };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };


    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, subject, email, phone, message } = this.state;
        return (
            <div className="main-content" >
                {/* <!-- Section A: Contact Form --> */}
                < section id="contact-a" className="text-center py-3" >
                    <div className="container">
                        <h2 className="section-title">
                            Contact Me
        </h2>
                        <div className="bottom-line"></div>
                        <p className="lead">Here is how you can reach me</p>
                        <form name="contact" onSubmit={this.handleSubmit} >
                            <Animated animationIn="flipInY" isVisible={true} className="text-fields">

                                <input
                                    className="text-input name-input"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                />

                                <input animationIn="fadeInLeft"
                                    className="text-input subject-input"
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    value={subject}
                                    onChange={this.handleChange}
                                />
                                <input
                                    className="text-input email-input"
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <input
                                    className="text-input phone-input"
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={phone}
                                    onChange={this.handleChange}
                                />
                                <textarea
                                    className="text-input message-input"
                                    type="text"
                                    placeholder="Enter Message"
                                    name="message"
                                    value={message}
                                    onChange={this.handleChange}
                                ></textarea>
                            </Animated>
                            <div className="py-3" data-netlify-recaptcha="true"></div>
                            <Animated animationIn="fadeInUpBig" isVisible={true} >

                                <button type="submit" formAction="/" className="btn-dark">Submit</button>
                            </Animated>
                        </form>
                    </div>
                </section>

                {/* <!-- Section B: COntact Info --> */}
                < section id="contact-b" className="py-3 bg-dark" >
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
                                <h3>Skype</h3>
                                <p>valeriita1ov</p>
                            </div>
                        </div>
                    </div>
                </section >

                {/* <!-- Section C: Tagline --> */}
                < section id="contact-c" className="bg-main py-4" >
                    <div className="container">
                        <h1>Let's Talk To Me</h1>
                    </div>
                </section >
            </div >
        )
    }
}

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default Contact;
