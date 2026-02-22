import React from 'react'
import {FiSearch} from "react-icons/fi"

const Search = () => {
  return (
    <div className='bg-stone-200 relative rounded flex  items-center px-2 py-1.5 text-sm'>
        <FiSearch/>
        <input type='text' placeholder='Search' className='w-full  px-2 bg-transparent placeholder:text-stone-400 focus:outline-none'/>
    </div>
  )
}

export default Search