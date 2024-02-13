import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>

      <div className="userChatInfo" style={{
        height: '74px',
        display: 'flex',
        background: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px '
      }}>
        <span>Nome</span>

      </div>
    </div>
  )
}

export default Search