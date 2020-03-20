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

    const handleChange = event => {
        let val = event.target.value
        props.handleChange(val)
    }
    return (
        <div
            // className = {writer}
        >
            <input 
                style={{
                    boxSizing: 'border-box',
                    width: '50%',
                    padding: '4px',
                    fontSize: '18px',
                    outline: 'none',
                }}
                type='text' 
                value={props.writerText}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}
