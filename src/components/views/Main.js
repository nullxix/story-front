import React, {useState} from 'react'
import {Nav, ShortStory, Head, Writer} from '../partials/index.js'
import {socketeer} from '../web-sockets/index.js'
import {center_big, text_holder} from '../styles/main.module.css'

export default props => {
    const   [story, setStory] = useState(''),
            [memo, setMemo] = useState(''),
            [writerText, setWriterText] = useState('')

    let memoResetter;

    const {sendWord, receiveBroadcast} = socketeer

    const storyCB = (_story, init = false) => {
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
        console.log('WT:', writerText)
        setWriterText(txt)
    }

    const submitWord = () => {
        console.log('submitting: ', writerText)
        sendWord(writerText)
    }

    const registerCB = () => {
        receiveBroadcast({storyCB, winCB, memoCB})
    }
    registerCB()

    return (
        <>
        {/* <Nav/> */}
        <Head/>
        <div
            className={`${center_big} ${text_holder}`}
            // style={{
            //     width: '70%',
            //     margin: 'auto',
            //     background: '#ffeeef',
            //     padding: '10px'
            // }}
        >
            <ShortStory story={story}/>
            <Writer 
                text={writerText} 
                handleChange={handleWriterChange} 
                sendWord={submitWord} 
                memo={memo}
            />
        </div>
        </>
    )
}