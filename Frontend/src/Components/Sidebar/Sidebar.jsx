import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'  style={{background:"rgba(238,237,228,0.02)", border:"2px solid rgba(255,255,255,0.2)", backdropFilter:"blur(6px)", }}>
      <SearchInput/>
      <div className='divider px-3 text-white'></div>
      <Conversations/>
         <LogoutButton/>
    </div>
  )
}

export default Sidebar
