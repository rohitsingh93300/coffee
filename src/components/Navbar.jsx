import React, { useState } from 'react'
import { Button } from './ui/button'
import Logo from '../assets/Logo.png'
import { Menu,X } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-amber-950 px-4 md:px-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        {/* logo section  */}
        <div className='flex items-center'>
            <img src={Logo} alt="" className='w-10 h-10'/>
            <h1 className='text-2xl  text-white font-cursive'>Brew Haven</h1>
        </div>
        {/* menu section */}
        <nav className='md:flex items-center gap-7 hidden'>
            <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Menu</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <Button className="bg-amber-900 py-2">Book a Table</Button>
        </nav>
        {
          open? <X onClick={()=>setOpen(false)} className='text-white w-7 h-7 md:hidden'/> : <Menu onClick={()=>setOpen(true)} className='text-white w-7 h-7 md:hidden'/>
        }
        
      </div>
        <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar
