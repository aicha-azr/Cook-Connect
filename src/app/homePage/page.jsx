"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import { useRouter } from "next/navigation";
import { AppDispatch } from '../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, getPost } from '../redux/slices/postSlices/PostThunk';
import NavBar from '../components/NavBar';
import Card from '../components/Card'
import requireAuth from '../requireAuth';
const Postpage = () => {
  requireAuth();
  const router = useRouter()
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchAllPosts());
}, [dispatch])
 const {data}   = useSelector((state) => state.posts); 

 
  const handleClick = (id) => {
    if (typeof id === 'string') {
      router.push(`/${id}`);
    }
  };
  return (
    <>
     <div className='grid grid-rows-10 h-fit'>
      <div className='border border-black h-fit'>
        <NavBar/>
      </div>
      <div className='row-span-9 row-start-2 border border-red-800 grid grid-cols-4 bg-blue-400 h-screen'>
         <div className='col-span-3 border-r border-black px-2 py-1'>
          {!Array.is}
            <Card/>
          </div>   
          <div className='col-span-1'></div>
      </div>
     </div>
     
    </>
  );
};
export default Postpage;
