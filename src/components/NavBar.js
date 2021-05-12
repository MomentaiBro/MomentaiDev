import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <footer className="NavBar__wrapper">
            <div className="NavBar__area">
                <nav className="NavBar__links">
                    <NavLink 
                        to='/' 
                        exact
                        activeClassName="active_"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/about'
                        activeClassName="active_"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to='/post'
                        activeClassName="active_"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to='/project'
                        activeClassName="active_"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/contact'
                        activeClassName="active_"
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </footer>
    )
}