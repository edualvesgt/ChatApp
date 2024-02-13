import React from 'react'
import NavBar from '../NavBar/NavBar'
import Search from '../Search/Search'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <Search/>
    </div>
  )
}

export default SideBar