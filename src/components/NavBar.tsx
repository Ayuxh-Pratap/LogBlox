import React from 'react'
import { Button } from './ui/button'
import { SiQuicktime } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <SiQuicktime className='text-xl text-green-500' />
        <h1 className='font-bold text-xl'>LogBlox</h1>
      </div>
      <div className='flex items-center gap-5'>
          <a href="https://github.com/Ayuxh-Pratap" target='_blank'><FaGithub className='text-2xl' /></a>
        <Button>Logout</Button>
      </div>
    </div>
  )
}
