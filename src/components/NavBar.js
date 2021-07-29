import React from 'react'
import { NavLink  } from 'react-router-dom'

const NavBar = () => {
    return (
        <div id='NavBar'>

            <NavLink to='/checkout' exact> Checkout </NavLink>
            <NavLink to='/history' exact> Cart History </NavLink>
            <NavLink to='/' exact> Items </NavLink>

        </div>
    )
}

export default NavBar
