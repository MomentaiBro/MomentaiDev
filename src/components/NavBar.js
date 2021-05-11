import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <header>
            <div className="NavBar__">
                <nav>
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
        </header>
    )
}