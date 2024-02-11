import React from 'react'
import './SlideBarHeader.css'

const SlideBarHeader = ({ setUserChat }) => {
    return (
        <div className='container'>
            <img className='avatar' src="" alt="" 
            onClick={() => [setUserChat(null)]}
            />
            <div className="option"> </div>
        </div>
    )
}

export default SlideBarHeader