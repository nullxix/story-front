import React from 'react'
import {Memo, Inerator} from '../writer-pieces/index.js'

export default props => {

    return (
        <div>
            {/* #ShouldHaveUsedContext */}
            <Inerator
                text={props.writerText} 
                handleChange={props.handleWriterChange} 
                sendWord={props.sendWord} 
            />
            <Memo memo={props.memo}/>
        </div>
    )
}