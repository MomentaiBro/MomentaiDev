import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <footer className="NavBar__wrapper">
            <div className="NavBar__area">
                <nav className="NavBar__links">
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/blog' exact>
                        Blog
                    </NavLink>
                    <NavLink to='/project' >
                        Projects
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </footer>
    )
}