import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

  const data = useLoaderData();
    
  return (
    <div className='container p-6 text-3xl bg-gray-700 flex flex-col items-center mx-auto my-4 text-white'>
        <span>User followers: {data.followers}</span>
        <img src={data.avatar_url} alt="Github image" width='300'/>
        <span>User Name: {data.name}</span>

    </div>
  )
}
