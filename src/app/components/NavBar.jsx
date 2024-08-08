'use client'
import brand from '../../../public/assets/cookIcon.png'
import logo from '../../../public/assets/logo_file_rouge.png';
import Image from "next/image";
import {useEffect, useState} from 'react';
import getUserIdFromCookie from '../getUserIdFromCookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/slices/userSlices/UserThunk';
import handleLogout from '../handleLogout';
import { Bell, CirclePlus, CircleUser, LogOut, Mail, Menu, Search, StickyNote } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch();
    const userId = getUserIdFromCookie();
    const {user} = useSelector((state) => state.users);
    
  useEffect(()=>{
    dispatch(getUser(userId));
  }, [dispatch])
   const {data}   = useSelector((state) => state.posts); 
  
   

    return(
        <>
        

        <div className="fixed top-0 flex flex-wrap justify-between w-screen max-h-fit  bg-blanc border-b border-bleu-ciel px-2 py-1">
            <a href='/homePage' className="h-[3rem]">
                <Image src={brand} alt="Brand Logo" className='h-full w-full object-contain' />
            </a>
            <div className='flex justify-center items-center px-1 gap-2 flex-row'>
                <div className='hidden lg:flex flex-row items-center border border-jaune text-black-maron rounded-full py-0.5 px-3'>
                    <Search className="mr-1" />
                    <input 
                        type='text' 
                        placeholder='search...' 
                        className='focus:outline-none focus:ring-0 focus:ring-bleu-ciel focus:border-none border-none px-2 text-black '
                    />
                </div>                
                <div className='rounded-xl p-2 border border-jaune text-black-maron'>
                <Bell />
                </div>
                <div className='rounded-xl p-2 border border-jaune text-black-maron lg:hidden' onClick={()=>
                    setIsOpen(!isOpen)
                }>
                <Menu />
                </div>
            </div>
   <div className={`col-span-1 absolute top-[3rem] lg:hidden flex flex-col p-2 mt-1 bg-blanc w-full ${isOpen ? 'flex' : 'hidden'}`}>
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
   
   {/** the menu */}
        </>
    )
}
export default NavBar;