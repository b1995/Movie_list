import React from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'





/**************************


**************************/

function Toolbar() {
    return(
        <header>
            <h1> Moovie list</h1>
            <nav ClassName = 'navbar'>
                <ul className = 'nav-links'>
                    <div className = 'links'>
                        {navLinks.map((link,index) => 
                            <li key ={index}>
                                <NavLink to={'link.path'} activeClassName = 'active-link'>
                                {['Contact Us', 'Meet the Team']}
                                </NavLink>
                            </li>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    )
}
export default withRouter(Toolbar);
