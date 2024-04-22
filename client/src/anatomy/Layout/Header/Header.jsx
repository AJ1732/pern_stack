import React from 'react'

const Header = () => {
  return (
    <header className='full-width content-grid | | flex justify-center items-center'>
      <nav className='flex justify-between items-center | py-5 border-b border-greyshade'>
        <h1 className='font-dm-serif font-semibold text-teal text-3xl self-start'>Todo List</h1>
      </nav>
    </header>
  )
}

export default Header