import React from 'react'
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About Me</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
