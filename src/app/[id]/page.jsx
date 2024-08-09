'use client'
import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { AppDispatch } from '../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../redux/slices/postSlices/PostThunk';
import requireAuth from "../requireAuth";
import NavBar from "../components/NavBar";
import { CirclePlus, CircleUser, LogOut, Mail, StickyNote } from "lucide-react";
import handleLogout from "../handleLogout";
import getUserIdFromCookie from "../getUserIdFromCookie";
import { getUser } from "../redux/slices/userSlices/UserThunk";
const Post = ({params})=>{
    requireAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [commentMenus, setCommentMenus] = useState(false)
    const [likes, setLikes] = useState(0);
    const id = params.id
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(id);
      dispatch(getPost(id));
      dispatch(getUser(userId));
    }, [id, dispatch])
    requireAuth();
    const userId = getUserIdFromCookie();
    const {user} = useSelector((state) => state.users);

     const {post} = useSelector((state) => state.posts);
     console.log(post); 
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const toggleCommentMenu = (commentId) => {
        setCommentMenus((prevMenus) => ({
            ...prevMenus,
            [commentId]: !prevMenus[commentId],
        }));
    };
    const handleLike = () => {
        setLikes(likes + 1);
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-EN', options);
      };
    return(
        <>
        <div className="grid grid-rows-10 h-fit font-serif border border-black">
        <div className="row-span-1">
     <NavBar />
     </div>
        <div className='row-span-9 grid grid-cols-5 h-fit font-serif'>
    <div className="lg:col-span-4 col-span-5 lg:border-r border-bleu-ciel h-screen max-h-fit overflow-y-auto scroll-smooth">
     {!post? ( 
        <div className='flex justify-center w-screen'>

              <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-jaune justify-center"></div>
            </div>
            ) :
            (
 
<div className=" max-w-7xl px-4 sm:px-6 ">
    <div className="max-w-3xl mx-auto">
        
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">{post.titre}</h1>
            <p className="text-bleu-ciel text-sm">Published on {formatDate(post.date_publication)}</p>
        </div>

        {post.images && post.images.map((image, index) => (
    <Image key={index} src={image}  layout="responsive" width={200} height={200} alt={`Featured image ${index}`} className=""/>
))}


        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p>{post.contenu}</p>
        </div>
    </div>
</div>
            )}

 {/* Nombre de likes */}
<div className="flex items-center justify-center border border-bleu-ciel mt-4">
    <div className="flex items-center text-black-maron text-md gap-[20rem]">   
        <p>if you like this post tap the like button</p>
        <div>
            <button onClick={handleLike} className="text-black-maron hover:text-orange font-bold py-2 px-4 rounded">
            <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      className=""
    >
      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
    </svg>
            </button>
            <span className="ml-2 w-[15rem] text-gray-700">{likes} Likes</span>
        </div>
    </div>             
            </div>

  {/** */}          
<div className="bg-blanc py-8 lg:py-16 antialiased">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
    </div>
    <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-bleu-ciel rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="px-0 w-full bg-bleu-ciel text-sm text-black-maron border-0 focus:ring-0 focus:outline-none "
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-bold text-center text-black-maron bg-jaune rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>
    <article className="relative p-6 mb-3 text-base bg-blanc border border-bleu-ciel dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-black-maron dark:text-white font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"/>Bonnie Green</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-03-12"
                        title="March 12th, 2022" className="text-orange">Mar. 12, 2022</time></p>
            </div>
            <button id="dropdownComment1Button"  onClick={() => toggleCommentMenu(1)}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-bleu-ciel rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4 text-black-maron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
           {/* <!-- Dropdown menu -->*/}
             <div id="dropdownComment1"
                className={`${commentMenus[1]? 'block' : 'hidden'} absolute right-0 top-20 z-10 w-36 bg-bleu-ciel rounded divide-y divide-gray-100 shadow `}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-black-maron hover:underline dark:text-gray-400 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5 text-black-maron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Reply
            </button>
        </div>
    </article>
    
    <article className="relative p-6 mb-3 text-base bg-blanc border border-bleu-ciel dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-black-maron dark:text-white font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"/>Bonnie Green</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-03-12"
                        title="March 12th, 2022">Mar. 12, 2022</time></p>
            </div>
            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" onClick={() => toggleCommentMenu(3)}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-bleu-ciel rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4 text-black-maron"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
           {/* <!-- Dropdown menu -->*/}
             <div id="dropdownComment3"
                className={`${commentMenus[3] ? 'block' : 'hidden'} absolute right-0 top-20 z-10 w-36 bg-bleu-ciel rounded divide-y divide-gray-100 shadow `}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-black-maron hover:underline dark:text-gray-400 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5 text-black-maron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                Reply
            </button>
        </div>
    </article>
   
  </div>
</div>
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
    ) 
}
export default Post;