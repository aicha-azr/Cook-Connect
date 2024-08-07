'use client'
import brand from '../../../public/assets/cookIcon.png'
import logo from '../../../public/assets/logo_file_rouge.png';
import Image from "next/image";
import {useState} from 'react';
import getUserIdFromCookie from '../getUserIdFromCookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/slices/userSlices/UserThunk';
import handleLogout from '../handleLogout';
import { Bell, Search } from 'lucide-react';

const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
   
    return(
        <>
        

        <div className="fixed top-0 flex flex-wrap justify-between w-screen max-h-fit  bg-blanc border-b border-bleu-ciel px-2 py-1">
            <a href='/homePage' className="h-[3rem]">
                <Image src={brand} alt="Brand Logo" className='h-full w-full object-contain' />
            </a>
            <div className='flex justify-center items-center px-1 gap-2 flex-row'>
                <div className='flex items-center border border-jaune text-black-maron rounded-full py-0.5 px-3'>
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
            </div>
        </div>
   
        </>
    )
}
export default NavBar;