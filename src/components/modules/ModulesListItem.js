import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const ModulesListItem = ({module}) => {

    const [active, setActive] = useState(false)

    return (
        <li 
        className={ active ? 'list active' : 'list'}
        onMouseEnter={e => setActive(true)}
        onMouseLeave={e => setActive(false)}
        >
            <b></b>
            <b></b>
            <NavLink to='/'>
                <i className={ module.setting_module_config.icon }></i>
                <span className="title">{ module.module }</span>
            </NavLink>
        </li>
    )
}
