import React from 'react'
import './SlideBar.css'
import SlideBarHeader from '../SlideBarHeader/SlideBarHeader'
import SlideBarChats from '../SlideBarChats/SlideBarChats'
 const SlideBar = ({setUserChat , userChat}) => {
  return (
    <div className='container'>
        <SlideBarHeader setUserChat ={setUserChat}></SlideBarHeader>
        <SlideBarChats setUserChat ={setUserChat}></SlideBarChats>
        </div>
  )
}

export default SlideBar
