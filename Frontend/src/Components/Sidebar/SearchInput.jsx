import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
// import useGetMessages from '../../Hooks/useGetMessages';
import useGetConversations from '../../Hooks/useGetConversations'
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search, setSearch] = useState(""); 
  const {setSelectedConversation}= useConversation();
   const { conversations } = useGetConversations();  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be atleast 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No user found!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 ... text-white'>
        <IoSearchSharp className='w-5 h-5 outline-none' />
        </button>
      </form>
    </div>
  )
}

export default SearchInput
