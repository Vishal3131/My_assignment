import React from 'react'
import Dashboard from './Dashboard'
import { Link, Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>

<div class="min-h-screen flex flex-row">

  <div class="flex flex-col w-56 overflow-hidden bg-gray-100">
    <ul class="flex flex-col py-4 ">
      <li>
        <Link to="dashboard" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200  ">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg "><i class="bx bx-home"></i></span>
          <span class="text-base font-medium">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="category" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg "><i class='bx bx-category-alt'></i></span>
          <span class="text-base font-medium">Category</span>
        </Link>
      </li>
      <li>
        <Link to="subCategory" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg "><i class='bx bx-list-ul'></i></span>
          <span class="text-base font-medium">Subcategory</span>
        </Link>
      </li>
      <li>
        <Link to="product" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg "><i class='bx bx-cube'></i></span>
          <span class="text-base font-medium">Product</span>
        </Link>
      </li>
    </ul>
  </div>
  <div className='w-full'>
     <Outlet/>
</div>
  
</div>
    
    </>
  )
}
