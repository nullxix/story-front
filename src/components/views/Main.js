import React, {useState} from 'react'
import {Nav, ShortStory, Writer} from '../partials/index.js'
import {socketeer} from '../web-sockets/index.js'

export default props => {
    const   [story, setStory] = useState(''),
            [memo, setMemo] = useState(''),
            [writerText, setWriterText] = useState('')

    let memoResetter;

    const {sendWord, receiveBroadcast} = socketeer

    const storyCB = (_story, {init = false}) => {
        if(init){
            setStory(_story)
        } else {
            setStory(prev => prev + ' ' + _story)
        }
    }

    const winCB = (success) => {
        if(success){
            //clear writer text
        } else {
            //flash red
        }
    }

    const memoCB = (msg) => {
        //todo (?)
        //make it 'queue' memos
        displayMemo(msg)
    }

    const displayMemo = (msg) => {
        //display message, then erase after a few seconds
        //if there's a message already,
        //make sure the erase events don't overlap
        if(memoResetter){
            memoResetter.clearTimeout()
        }
        setMemo(msg)
        memoResetter = setTimeout(() => {
                    setMemo('')
                    memoResetter = undefined
                }, 
                5000
            )
    } 

    

    const handleWriterChange = (txt) => {
        setWriterText(txt)
    }

    const submitWord = () => {
        sendWord(writerText)
    }
    
    const registerCB = () => {
        receiveBroadcast({storyCB, winCB, memoCB})
    }
    registerCB()

    return (
        <div
            style={{
                width: '70%',
                margin: 'auto',
                background: '#ffeeef',
                padding: '10px'
            }}
        >
            <Nav/>
            <ShortStory story={story}/>
            <Writer 
                text={writerText} 
                handleChange={handleWriterChange} 
                sendWord={submitWord} 
                memo={memo}
            />
        </div>
    )
}