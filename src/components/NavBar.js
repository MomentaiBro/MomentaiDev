import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <header>
            <div>
                <nav>
                    <Navlink to='/' exact>
                        Home
                    </Navlink>
                    <Navlink to='/about'>
                        About
                    </Navlink>
                    <Navlink to='/blog'>
                        Blog
                    </Navlink>
                    <Navlink to='/project'>
                        Projects
                    </Navlink>
                    <Navlink to='/contact'>
                        Contact Me
                    </Navlink>
                </nav>
            </div>
        </header>
    )
}