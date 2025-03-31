import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
  return (
    <div className='container p-6 text-3xl bg-gray-700 flex mx-auto my-4 text-white'>
        <span className='mx-auto'>User: {userid}</span>
    </div>
  )
} 
