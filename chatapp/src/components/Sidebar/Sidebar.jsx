import React from 'react'
import NavBar from '../NavBar/NavBar'
import Search from '../Search/Search'
import Chats from '../Chats/Chats'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBar