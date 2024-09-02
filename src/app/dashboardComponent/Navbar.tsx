import React from 'react'

function Navbar() {
  return (
    <div className=' flex justify-around items-center mt-4 text-white '>
        <div className=' text-3xl font-extrabold'>CG</div>
        <div className=' flex gap-7 text-xl font-bold'>
            <h2>Search</h2>
            <h2>Copilot</h2>
        </div>
    </div>
  )
}

export default Navbar