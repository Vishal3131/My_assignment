import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/main.css'
import axios from 'axios'

export default function Login() {
  const [HidePassword, setShowPass]=useState(true)
  const email=useRef()
  const password=useRef()
  const navigate=useNavigate();

  const handleLogin= async(e)=>{
    e.preventDefault();
    const userData={'email':email.current.value, 'password':password.current.value}
    try{
      await  axios({
          url:'http://localhost:4000/api/users/login',
          method:'post',
          data: userData,
          ContentType:'application/json'
        }).then((e)=>{
          console.log(e.data)
          localStorage.setItem('token',e.data.token)
          if(e.data){
            navigate('/home/dashboard')
          }
        })
      }catch(error){
        console.error('Error registering user:', error);
        alert(error.response?.data.message)
      }
  }
  return (
   <>
   
   <div class='container mx-auto flex justify-center'>
      <div class='w-96 mt-10 items-center'>
        <form onSubmit={handleLogin} >
        <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
            <div class="flex flex-col justify-center items-center h-full select-none">
                <div class="flex flex-col items-center justify-center gap-2 mb-8">
                    <a href="https://amethgalarcio.web.app/" target="_blank">
                        <img src="https://tablesprint.com/_next/image?url=%2Fimg%2Flogo-white.png&w=1920&q=75" class="w-48"/>
                    </a>
                    <p class="mt-3 text-[14px] font-semibold text-gray-500 dark:text-gray-600">Welcome to TableSprint admin</p>
                    
                </div>
                <div class="relative w-full flex flex-col gap-2">
                  <label class="absolute -top-1 left-3 font-semibold text-xs text-gray-400 dark:text-gray-400 transition-transform transform -translate-y-1/1 bg-white px-1">
                    Email-id
                  </label>
                  <input class="border rounded-lg px-3 py-2 mb-5 text-sm max-w-full outline-none dark:border-gray-500 dark:bg-gray-900" ref={email} required/>
                </div>

            </div>
            <div class="relative w-full flex flex-col gap-2">
                <label class="absolute -top-1 left-3 font-semibold text-xs text-gray-400 dark:text-gray-400 transition-transform transform -translate-y-1/1 bg-white px-1">Password</label>
                <input type={HidePassword ? "password" : 'text' } class="border rounded-lg px-3 py-2 mb-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" required ref={password}/>
                {HidePassword ? <div className='relative  parent-show'><i class='absolute  bx bx-show fs-4' onClick={()=>setShowPass(!HidePassword)}></i></div>:
               <div className='parent-show'><i class='bx bx-hide fs-4' onClick={()=>setShowPass(!HidePassword)}></i></div>}
            </div>
            <div class='mt-0 text-end font-semibold text-xs text-[#5d1689]'>
               <span>Forgot Password?</span>
            </div>
            <div className="mt-4">
                <button class="py-1 px-8 bg-[#5d1689] text-white w-full transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none   rounded-lg cursor-pointer select-none" >Log In</button>
            </div>
            <div class='mt-2 text-center font-semibold text-xs text-[#5d1689]'>
            <Link to='register'><span className='cursor-pointer'>Not A User? Register</span></Link> 
             </div>
        </div>
        </form>
      </div>
    </div>

   </>
  )
}
