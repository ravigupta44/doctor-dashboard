import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({name,icon}) => {
    return (
        <div className='sidebar_options'>
            <img src={icon} alt={name} />
            <div className="name">{name}</div>
        </div>
    )
}

export default SidebarOptions
