import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <header>
          <div className="container-fluid">
                <div className="logo">
                    <img src="./images/logo-dream-square.png" />
                </div>
                <nav>
                    <Link  to="/">Home</Link>
                    <Link  to="/about">About</Link>
                    <Link  to="/contact">Contact</Link>
                    <Link  to="/projects">Projects</Link>
                </nav>
                <div className="topSocial">
                    <Link className="fab fa-facebook-f" to="/"></Link>
                    <Link className="fab fa-instagram mx-3" to="/"></Link>
                    <Link className="fab fa-linkedin" to="/"></Link>
                </div>
            </div>
        </header>
    )
}