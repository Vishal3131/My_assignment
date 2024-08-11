import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Category() {
  const [toggle ,settoggle]=useState(true)
  
  return (
    <>
    <div className='container m-3'>
      {toggle ?<>
     <div class=" flex flex-wrap">
         <div class="basis-1/6 ">
           <div className='flex flex-wrap'>
             <span className='text-2xl'><i class='bx bx-category-alt'></i></span>
             <span className='ml-3 text-base font-medium'>Category</span>
          </div>
        </div>
         <div class="basis-1/2">
           <input type='text'  class="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none text-sm" placeholder='search here'/>
         </div>
         <div class="basis-1/4 ml-3">
        <Link to='addcategory'><button class="py-2 px-3 bg-[#5d1689] text-white  transition ease-in duration-200 text-center text-sm font-medium focus:outline-none rounded-lg cursor-pointer" onClick={()=>settoggle(!toggle)} >Add Category</button></Link> 
         </div>
       </div>

       <div class="container mx-auto mt-7">
        <div class="overflow-x-auto">
         <div class="max-h-[29rem] overflow-y-auto">
            <table class="min-w-full bg-white  rounded-lg shadow-md">
                <thead class="bg-[#fffebf] text-black">
                    <tr>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Id <i class='bx bxs-sort-alt text-gray-400'></i></th>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Category Name <i class='bx bxs-sort-alt text-gray-400'></i></th>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Image <i class='bx bxs-sort-alt text-gray-400'></i></th>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Status <i class='bx bxs-sort-alt text-gray-400'></i></th>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Sequence <i class='bx bxs-sort-alt text-gray-400'></i></th>
                        <th class="py-3 px-4 border-b border-gray-200 text-left">Action <i class='bx bxs-sort-alt text-gray-400'></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-3 px-4 border-b border-gray-200">1</td>
                        <td class="py-3 px-4 border-b border-gray-200">Electronic device</td>
                        <td class="py-3 px-4 border-b border-gray-200">
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHK5DkIKDNtuQN_gjEC4fjCjvGqMVsoLmg&s' alt='' class='h-10'/>
                        </td>
                        <td class="py-3 px-4 border-b border-gray-200 text-danger">Active</td>
                        <td class="py-3 px-4 border-b border-gray-200">1</td>
                        <td class="py-3 px-4 border-b border-gray-200 space-x-3">
                          <span className='text-xl'><i class='bx bx-edit'></i></span>
                          <span className='text-xl'><i class='bx bx-trash'></i></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-3 px-4 border-b border-gray-200">2</td>
                        <td class="py-3 px-4 border-b border-gray-200">Dall & Pulses</td>
                        <td class="py-3 px-4 border-b border-gray-200">
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr-jBlWPqB71vMHvwlt3B9jGxzCFiXDmJkg&s' alt='' class='h-10'/>
                        </td>
                        <td class="py-3 px-4 border-b border-gray-200 text-danger">Active</td>
                        <td class="py-3 px-4 border-b border-gray-200">1</td>
                        <td class="py-3 px-4 border-b border-gray-200 space-x-3">
                          <span className='text-xl'><i class='bx bx-edit'></i></span>
                          <span className='text-xl'><i class='bx bx-trash'></i></span>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
          </div>
         </div>
       </div></>:
       <Outlet/>
      }
       </div>
    
    </>
  )
}
