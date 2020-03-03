import React from 'react'
import {writer} from '../styles/writer.module.css'

export default props => {

    const handleKeyPress = event => {
        switch (event.key) {
            case 'Enter':
                    props.sendWord()
                break;
        }
    }
    return (
        <div
            // className = {writer}
        >
            <input 
                style={{
                    boxSizing: 'border-box',
                    width: '100%',
                }}
                type='text' 
                value={props.writerText}
                onChange={props.handleWriterChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}
