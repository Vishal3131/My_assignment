import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Category from './category/Category';
import AddCategory from './category/AddCategory';
import Register from './Register';
import SubCategory from './subCategory/SubCategory';
import AddSubCategory from './subCategory/AddSubCategory';
import Product from './product/Product';
import AddProduct from './product/AddProduct';
import MyContext from './context/MyContext';

export default function Routing() {
  return (
    <>
    <MyContext>
     <Router>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='category' element={<Category/>}>
            <Route path='addcategory' element={<AddCategory/>}/>
         </Route>
         <Route path='subCategory' element={<SubCategory/>}>
           <Route path='addsubcategory' element={<AddSubCategory/>}/>
         </Route>
         <Route path='product' element={<Product/>}>
           <Route path='product' element={<AddProduct/>}/>
         </Route>
        </Route>
       </Routes>
     </Router>
     </MyContext>
    </>
  )
}
