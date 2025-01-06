import React from 'react'

const ResponsiveMenu = ({open, setOpen}) => {
  return (
    <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-30 flex h-screen w-[75%] flex-col justify-between bg-amber-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
    <div>
        <nav className='mt-12'>
            <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
            <a href="/"><li className='cursor-pointer'>Home</li></a> 
                <a href="#menu"><li className='cursor-pointer' onClick={()=>setOpen(false)}>Menu</li></a>
                <a href="#about"><li className='cursor-pointer' onClick={()=>setOpen(false)}>About</li></a>
               <a href="#testimonial"><li className='cursor-pointer' onClick={()=>setOpen(false)}>Testimonial</li></a> 
                <a href="#contact"><button onClick={()=>setOpen(false)} className='px-3 py-1 w-max rounded-md bg-amber-700 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-amber-500 border-amber-400 border-2'>Contact</button></a>
            </ul>
        </nav>
    </div>
    <div className='text-white'>
        <h1>
            Made with ❤️ by Rohit
        </h1>
    </div>
</div>
  )
}

export default ResponsiveMenu
