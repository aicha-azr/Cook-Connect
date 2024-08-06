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
      <div className='border border-black h-fit z-10'>
        <NavBar/>
      </div>
      <div className='row-span-9 row-start-2 grid grid-cols-4  h-fit'>
         <div className='lg:col-span-3 col-span-4 border-r border-bleu-ciel px-2 py-1 overflow-y-auto scroll-smooth h-screen flex flex-col gap-3'>
          {!Array.isArray(data) || data.length === 0 ?( <div className='flex justify-center  mt-20'>
              <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-jaune justify-center"></div>
            </div>
            ) : (    data.map((item) => (  <>  
              
            <Card image={item.images} title={item.titre} description={item.contenu}  onClick={()=>{
              handleClick(item._id)}} name={item.user.nom} date={item.date_publication}/>
           
            </>)
            )
            )}
          </div>   
          <div className='col-span-1 hidden lg:block'>the menu</div>
      </div>
     </div>
     
    </>
  );
};
export default Postpage;
