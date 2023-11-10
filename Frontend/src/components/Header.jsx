import React from 'react'
import { images } from '../constants/index.jsx'

const navItemsInfo = [
    {
        name: 'Home'
    },
    {
        name: 'Articles'
    },
    {
        name: 'Pages'
    },
    {
        name: 'Pricing'
    },
    {
        name: 'Faq'
    },
]

const NavItem = ({name}) => {
    return (
        <li className='relative group'>
            <a href="" className='px-4 py-2 '>{name}</a>
            <span className='absolute top-0 right-0 font-bold text-blue-500 transition-all duration-500 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
        </li>
    )
}

const Header = () => {
  return (
    <>
      <section>
         <header className='container flex items-center justify-between px-5 py-4 mx-auto'>
            <div>
               <img className='' src= {images.Logo} alt = "logo" />       
            </div>
            <div className='flex items-center gap-x-9'>
                <ul className='flex font-semibold gap-x-2'>

                    {navItemsInfo.map((item) => (
                        <NavItem key ={item.name} name={item.name} />
                    ))}    

                </ul>
                <button className='px-6 py-2 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white'>Sign in</button>
            </div>     
         </header>
      </section>
    </>
  )
}

export default Header
