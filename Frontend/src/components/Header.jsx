import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md"
import { images } from '../constants/index.jsx'

const navItemsInfo = [
    {name: 'Home', type: "link"},
    {name: 'Articles', type: "link"},
    {name: 'Pages', type: "dropdown", items: ["About us", "Contact us"]},
    {name: 'Pricing', type: "link"},
    {name: 'Faq', type: "link"},
]

const NavItem = ({item}) => {
    return (
        <li className='relative group'>
           {item.type === "link" ? (
           <>
              <a href="" className='px-4 py-2 '>
                {item.name}
                
              </a>
              <span className='absolute top-0 right-0 font-bold text-blue-500 transition-all duration-500 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
                /
              </span>
            </>
            ) : (
            <>
              <a href="" className='flex items-center gap-1 px-4 py-2 '>
              <span>{item.name}</span>
              <MdKeyboardArrowDown />
              </a>
              <div className= "absolute bottom-0 hidden pt-4 transition-all duration-500 transform translate-y-full group-hover:block w-max">
                  <ul className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                    {item.items.map((page) => (
                          <a href="/" className='px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft'>
                            {page}
                          </a>
                    ))}
                  </ul>
              </div>
            </> 
            )} 
        </li>
    )
}

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    });
};

  return (
    <>
      <section>
         <header className='container flex items-center justify-between px-5 py-4 mx-auto'>
            <div>
               <img className='w-24' src= {images.Logo} alt = "logo" />       
            </div>
            <div className='z-50 lg:hidden'>
                {navIsVisible ? (
                <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />
                ) : (
                <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
                )}
            </div>
            <div className={`${navIsVisible ? "right-0" : "-right-full"} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] fixed top-0 bottom-0 flex flex-col items-center justify-center w-full lg:w-auto lg:flex-row -right-full gap-x-9 lg:static`}>
                <ul className='flex flex-col items-center font-semibold text-white gap-y-5 lg:text-dark-soft lg:flex-row gap-x-2'>

                    {navItemsInfo.map((item) => (
                        <NavItem key ={item.name} item={item} />
                    ))}    

                </ul>
                <button className='px-6 py-2 mt-5 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full lg:mt-0 hover:bg-blue-500 hover:text-white'>Sign in</button>
            </div>     
         </header>
      </section>
    </>
  )
}

export default Header
