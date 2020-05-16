import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    showMenu = () => (
        this.setState({
            isChecked: !this.state.isChecked
        })
    )

    render() {
        return (
            <div className="menu-wrap">
                <input type="checkbox" onClick={this.showMenu} checked={this.state.isChecked} className="toggler"></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div><div><ul>
                        <li><Link to="/" onClick={this.showMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={this.showMenu}>About</Link></li>
                        <li><Link to="/experience" onClick={this.showMenu}>Experience</Link></li>
                        <li><Link to="/portfolio" onClick={this.showMenu}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={this.showMenu}>Contact</Link></li>
                    </ul></div></div>
                </div>
            </div >
        )
    }
}
