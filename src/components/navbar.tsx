import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-900'>
        <nav className='text-white text-xl'>
      <ul className='flex flex-row justify-evenly items-center m-4 p-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
