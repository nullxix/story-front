import React from 'react'


export default props => {

    return (
        <div
            style={{
                paddingTop: '15px'
            }}
        >
            {props.memo || ""}
        </div>
    )
}