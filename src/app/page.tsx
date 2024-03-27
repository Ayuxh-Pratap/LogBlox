import NavBar from '@/components/NavBar'
import { NewLog } from '@/components/NewLog'
import React from 'react'

export default function page() {
  return (
    <div className='p-5 space-y-10'>
      <NavBar />
      <NewLog />
    </div>
  )
}
