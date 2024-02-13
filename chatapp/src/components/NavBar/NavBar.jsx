import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
        <span className="logo"> TalkHub</span>
        <img src="../../assets/TalkHub_logo.jpeg" alt="" />
        <div className="user">
            <span>Duds</span>
            <button> Logout</button>
        </div>
    </div>
    

  )
}

export default NavBar