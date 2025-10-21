import React from 'react'
import '../src/App.css'
import { Link } from 'react-router-dom'

const Pager = () => {
  return (
    <div className=' flex items-center h-10 bg-white gap-2'>
        <Link className='text-black' to="/">Home</Link>
        <Link className='text-black' to="/page1">Page 1</Link>
    </div>
  )
}

export default Pager