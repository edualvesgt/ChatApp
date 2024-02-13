

import React from 'react'
import Profile from '../../assets/Profile.png'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        {/* <img src={Profile} alt="" /> */}
       
        <div className="messageContent">
         
          <p>  <img src= {Profile} alt="" /> Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Message