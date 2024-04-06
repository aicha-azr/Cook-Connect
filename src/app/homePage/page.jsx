"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import { useRouter } from "next/navigation";
import { AppDispatch } from '../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, getPost } from '../redux/slices/postSlices/PostThunk';
import NavBar from '../components/NavBar';
const Postpage = () => {
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
      
      {/* Menu */}
      <div className={`absolute top-15 right-0 z-50 ${isOpen ? 'block' : 'hidden'} p-4 bg-blanc shadow-md dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-t border-black-maron">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-t border-black-maron">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-t border-black-maron">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-t border-black-maron">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
{/**  les post*/}
<section className="flex flex-row flex-wrap  mx-auto mt-20">
{!Array.isArray(data) || data.length === 0 ? ( 
        <div className='flex justify-center w-screen'>

              <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-jaune justify-center"></div>
            </div>
            ) : (
              data.map((item) => (
<div className="mx-auto px-4 py-8 max-w-xl my-20">
        <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
            <div className="md:flex-shrink-0">
                <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" width={80} height={64}/>
            </div>
            <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{item.titre}</h2>
                    <p className="text-sm text-gray-700 px-2 mr-1">
                        {item.contenu}
                    </p>
                    <div className="flex items-center justify-between mt-2 mx-6">
                        <p className="text-blue-500 text-xs -ml-3 " onClick={()=>{
          handleClick(item._id)
          }}>Show More</p>
                        <a href="#" className="flex text-gray-700">
                            <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                            </svg>
                            5
                        </a>
                    </div>
                <div className="author flex items-center -ml-3 my-3">
                    <div className="user-logo">
                        <img className="w-12 h-12 object-cover rounded-full mx-4  shadow" src='"https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"' alt="avatar"/>
                    </div>
                    <h2 className="text-sm tracking-tighter text-gray-900">
                        <a href="#">By {item.user.nom}</a> <span className="text-gray-600">{item.date_publication.substring(0, 10)}</span>
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
