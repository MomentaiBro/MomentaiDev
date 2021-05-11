import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <header>
            <div>
                <nav>
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink>
                        
                    </NavLink>
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}