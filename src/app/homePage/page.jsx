"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import { useRouter } from "next/navigation";
import { AppDispatch } from '../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, getPost } from '../redux/slices/postSlices/PostThunk';
import NavBar from '../components/NavBar';
import requireAuth from '../requireAuth';
const Postpage = () => {
  requireAuth();
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchAllPosts());
}, [dispatch])
 const {data}   = useSelector((state) => state.posts); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const handleClick = (id) => {
    if (typeof id === 'string') {
      router.push(`/${id}`);
    }
  };
  return (
    <>
       <div>
     <NavBar/>
      
  
    </div>
    {/*<div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
        <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
        </span>
        <input className="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl" placeholder="Search..." type="text"/>
        <span onclick="(() => { this.previousElementSibling.value=''})()" className="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        </span>
  </div>*/}
{/**  les post*/}
<section className="flex flex-row flex-wrap  mx-auto mt-20 ">
{!Array.isArray(data) || data.length === 0 ? ( 
        <div className='flex justify-center w-screen mt-20'>

              <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-jaune justify-center"></div>
            </div>
            ) : (
              data.map((item) => (
<div className="mx-auto px-4 py-8 max-w-xl my-20 lg:w-1/2 ">
        <div className="bg-blanc shadow-2xl rounded-lg mb-6 tracking-wide" >
            <div className="md:flex-shrink-0">
                <img src={item.images} alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" width={80} height={64}/>
            </div>
            <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{item.titre}</h2>
                    <p className="text-sm text-bleu-ciel px-2 mr-1">
                        {item.contenu.substring(0, 60) + "..."}
                    </p>
                    <div className="flex items-center justify-between mt-2 mx-6">
                        <p className="text-orange text-xs -ml-3 hover:pointer " onClick={()=>{
          handleClick(item._id)
          }}>Show More</p>
                        <a href="#" className="flex text-gray-700">
                            <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-orange" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                            </svg>
                            5
                        </a>
                    </div>
                <div className="author flex items-center -ml-3 my-3">
                  
                    <h2 className="flex gap-4 text-sm tracking-tighter text-gray-900 ml-5">
                        <a href="#" className="text-black-maron">By {item.user.nom}</a> <span className="text-gray-600">{item.date_publication.substring(0, 10)}</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>)))}
    </section>
     
    </>
  );
};
export default Postpage;
