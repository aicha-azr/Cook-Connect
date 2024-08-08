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
import { CirclePlus, CircleUser, LogOut, Mail, Search, StickyNote } from 'lucide-react';
import getUserIdFromCookie from '../getUserIdFromCookie';
import { getUser } from '../redux/slices/userSlices/UserThunk';
import handleLogout from '../handleLogout';
const Postpage = () => {
  requireAuth();
  const router = useRouter()
  const dispatch = useDispatch();
  const userId = getUserIdFromCookie();
  const {user} = useSelector((state) => state.users);
  
useEffect(()=>{
  dispatch(fetchAllPosts());
  dispatch(getUser(userId));
}, [dispatch])
 const {data}   = useSelector((state) => state.posts); 

 
  const handleClick = (id) => {
    if (typeof id === 'string') {
      router.push(`/${id}`);
    }
  };
  return (
    <>
     <div className='grid grid-rows-10 h-fit font-serif'>
      <div className='border border-black h-fit z-10'>
        <NavBar/>
      </div>
      <div className='lg:hidden flex p-3  w-full items-center justify-center '>
        <div className='flex flex-row items-center border border-jaune text-black-maron rounded-full py-2 mx-2 px-3 w-full'>
                    <Search className="mr-1" />
                    <input 
                        type='text' 
                        placeholder='search...' 
                        className='focus:outline-none focus:ring-0 focus:ring-bleu-ciel focus:border-none border-none px-2 text-black  w-full'
                    />
                </div>    
                </div> 
      <div className='row-span-9 lg:row-start-2 grid grid-cols-5  h-fit'>
         <div className='lg:col-span-4 col-span-5 lg:border-r border-bleu-ciel px-2 py-1 overflow-y-auto scroll-smooth h-screen flex flex-col gap-3'>
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
          <div className='col-span-1 hidden lg:block flex flex-col p-2 mt-1'>
            <div className='flex border-b border-bleu-ciel py-1.5 gap-3 hover:cursor-pointer hover:text-orange '>
            <CircleUser /> 
            {user?( <p>{user.nom}</p>
       ): (<p>no user found</p>)}
            </div>
            <div className='flex border-b border-bleu-ciel py-1.5 gap-3 hover:cursor-pointer hover:text-orange'>
            <Mail /> {user?(<p>{user.email}</p>
       ): (<p>no user found</p>)}
            </div>
            <a href="/addPost" className='flex border-b border-bleu-ciel py-1.5 gap-3 hover:cursor-pointer hover:text-orange'>
            <CirclePlus /> add post
            </a>
             <div className='flex border-b border-bleu-ciel py-1.5 gap-3 hover:cursor-pointer hover:text-orange  '>
            <StickyNote />my posts
            </div>
             <div className='flex border-b border-bleu-ciel py-1.5 gap-3 hover:cursor-pointer hover:text-orange' onClick={handleLogout}>
            <LogOut /> Log Out
            </div>
          </div>
      </div>
     
     
            </div>
    </>
  );
};
export default Postpage;
