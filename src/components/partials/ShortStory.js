import React from 'react'
import {story_mask} from '../styles/story.module.css'

export default props => {
    const {story} = props
    let className = '';
    if (story.length > 1000){
        className=story_mask
    }
    
    return (
        <div
            className={className}
        >
            {story}
        </div>
    )
}