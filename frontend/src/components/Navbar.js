import React, { useState } from 'react'
import Modal from './Modal'

 
export default function Navbar() {
    const [Toggle,setToggle]=useState(true)

  return (
    <>

    <nav class="main-logo bg-[#6c2a95] border-gray-200 dark:bg-gray-900">
       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" className="bi bi-box-seam text-white" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
          </svg>
             <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">TableSprint</span>
         </a>  
         <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
             <button type="button" class="flex text-sm rounded-full md:me-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
               <span class="text-3xl text-white"><i class='bx bx-user-circle' onClick={()=>setToggle(!Toggle)}></i></span>
             </button>
           </div>
          
         </div>
       </nav>
      
        <Modal togglebtn={Toggle} title={'Log Out'} description={'Are you sure you want to log out?'}/>
    
    </>
  )
}
