import React from 'react'
import { FaChevronDown,FaChevronUp } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const AccountToggle = () => {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-stone-500'>
        <button className='flex p-1 hover:bg-stone-500 rounded transition-colors realative gap-2 w-full items-center'>
            <img  src="https://api.dicebear.com/9.x/notionists/svg" alt='avatar' className='size-8 rounded shrink-0 bg-violet-500 shadow'/>
            <div className='text-start'>
              <span className='text-sm font-bold block'>Dipal Das</span>
              <span className='text-xs block text-stone-500'>dipal@hover.dev</span>
              
            </div>
          
        </button>
    </div>
  )
}

export default AccountToggle