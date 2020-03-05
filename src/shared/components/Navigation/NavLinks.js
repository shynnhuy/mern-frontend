import React from 'react';
import { NavLink } from 'react-router-dom'

import './NavLinks.scss'

export const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/' exact>
                    all users
                </NavLink>
            </li>
            <li>
                <NavLink to='/1/places'>
                    my places
                </NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>
                    new place
                </NavLink>
            </li>
            <li>
                <NavLink to='/auth'>
                    authenticate
                </NavLink>
            </li>
        </ul>
    )
}
