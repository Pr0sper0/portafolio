import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {

    const [isChecked, toggleCheck] = useState(false);


    function showMenu() {
        toggleCheck(!isChecked)
    }


    return (
        <div className="menu-wrap">
            <input type="checkbox" onChange={showMenu} checked={isChecked} className="toggler"></input>
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div><div><ul>
                    <li><Link to="/" onClick={showMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={showMenu}>About</Link></li>
                    <li><Link to="/experience" onClick={showMenu}>Experience</Link></li>
                    <li><Link to="/portfolio" onClick={showMenu}>Portfolio</Link></li>
                    <li><Link to="/contact" onClick={showMenu}>Contact</Link></li>
                </ul></div></div>
            </div>
        </div >
    )

}


export default Hamburger;
