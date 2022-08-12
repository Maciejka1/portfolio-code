import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='py-10 min-h-[95vh] container'>
        <div className='min-h-[80vh] flex justify-center items-center flex-col'>
            <h1 className='header' style={{fontSize: "12rem"}}>404</h1>
            <Link to="/" className='underline'>Go back</Link>
        </div>
    </div>
  )
}
