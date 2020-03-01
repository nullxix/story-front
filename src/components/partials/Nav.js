import React from 'react'
import {nav, active} from '../styles/nav.module.css'

export default props => {

    return (
        <div
            className = {nav}
            // style={{
            //     position: "absolute",
            //     top: '10px',
            //     left: '10px',
            // }}
        >
            <ul>
                <li>Full Story</li>
                <li>Rules</li>
                <li>Other Stuff</li>
            </ul>
        </div>
    )
}