import React from 'react';
import { Link } from 'react-router-dom'; 
import * as FaIcons from 'react-icons/fa';

function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center '>
   <div className='w-20 '>
    <img  className='w-full h-10 object-cover'
     src="https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b?h=464" alt="" />

   </div>
        
      <div className='flex justify-center cursor: auto '>
        <ul className='flex gap-2 px-3 py-1 text-sm rounded-3xl m-3 font-normal font-sans text-white bg-slate-950 cursor-pointer'>
          <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>HOME</li>
          <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>ABOUT</li>
          <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>CONTACT</li>
          <li className='hover:bg-slate-100 hover:rounded-2xl px-2 p-1 hover:bg-opacity-20'>BLOG</li>
        </ul>
      </div>


      <div className='px-4 '>
        <Link to="/">
        <FaIcons.FaBars size={30} />
        </Link>
      
      </div>

      </div>
    </>
  );
}

export default Navbar;
