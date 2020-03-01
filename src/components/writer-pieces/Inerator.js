import React from 'react'


export default props => {

    const handleKeyPress = event => {
        switch (event.key) {
            case 'Enter':
                    props.sendWord()
                break;
        }
    }
    return (
        <>
            <input 
                type='text' 
                value={props.writerText}
                onChange={props.handleWriterChange}
                onKeyPress={handleKeyPress}
            />
        </>
    )
}
