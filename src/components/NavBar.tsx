import React from 'react'
import { Button } from './ui/button'
import { SiQuicktime } from "react-icons/si";

export default function NavBar() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
        <SiQuicktime className='text-xl' />
        <h1>LogBlox</h1>
        </div>
        <Button>Logout</Button>
    </div>
  )
}
