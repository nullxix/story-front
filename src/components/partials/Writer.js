import React from 'react'
import {Memo, Inerator} from '../writer-pieces/index.js'
import {center_little} from '../styles/main.module.css'

export default props => {

    return (
        <div
            className={center_little}
        >
            {/* #ShouldHaveUsedContext */}
            <Inerator
                text={props.writerText} 
                handleChange={props.handleChange} 
                sendWord={props.sendWord} 
            />
            <Memo memo={props.memo}/>
        </div>
    )
}