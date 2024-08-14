import React from 'react'
import { createContext ,useState,useContext } from 'react';

const CheckUserLogin=createContext();

export default function MyContext({children}) {
    const [User,setUser]=useState(false);
  return (
      <>
      <CheckUserLogin.Provider value={{User,setUser}}>
           {children}
         </CheckUserLogin.Provider>
      </>
  )
}
export const useUsercontext=()=> useContext(CheckUserLogin);