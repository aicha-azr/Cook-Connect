'use client'
import React, { useState } from 'react';
import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import { useRouter } from "next/navigation";
const Postpage = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="bg-blanc border-gray-200 shadow-sm shadow-black-maron">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="h-8 w-8" alt="Flowbite Logo" />
            <span className="self-center text-black-maron text-2xl md:text-1xl font-semibold whitespace-nowrap dark:text-white">CookConnect</span>
          </a>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-maron rounded-lg  hover:bg-bleu-ciel focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user"  onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 "  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </nav>
      
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
{/** search bar */}
      <label
        class="mx-auto mt-20 relative bg-black-maron min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        for="search-bar"
      >
        <input
          id="search-bar"
          placeholder="your keyword here"
          class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-blanc"
        />
        <button class="w-full md:w-auto px-6 py-3 bg-jaune text-black-maron fill-white active:scale-95 duration-100 border border-jaune will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div class="relative">
            <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
              <svg
                class="opacity-0 animate-spin w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>

            <div class="flex items-center transition-all opacity-1 valid:">
              <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Search
              </span>
            </div>
          </div>
        </button>
      </label>
      {/**  les posts*/}
      <section className="flex flex-row flex-wrap mx-auto mt-20">
        <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3" onClick={()=>{
            handleClick('1');
        }}>
          <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-blanc rounded-lg shadow-lg hover:shadow-2xl">
          <section className="px-4 py-2 mt-2 border-b border-black-maron">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                    alt="Avatar"
                  />
                  <div className="flex flex-col mx-2">
                    <a
                      href=""
                      className="font-semibold text-gray-700 hover:underline"
                    >
                      Fajrian Aidil Pratama
                    </a>
                    <span className="mx-1 text-xs text-gray-600">
                      28 Sep 2020
                    </span>
                  </div>
                </div>
               
              </div>
            </section>
            <div className="md:flex-shrink-0">
              <img
                src={logo}
                alt="Blog Cover"
                className="object-fill w-full rounded-lg rounded-b-none md:h-56"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span className="text-xs font-medium text-blue-600 uppercase">
                Web Programming
              </span>
              <div className="flex flex-row items-center">

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span>25</span>
                </div>

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                  <span>7</span>
                </div>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
              <a href="#" className="hover:underline">
                <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                  Ho to Yawn in 7 Days
                </h2>
              </a>
            </div>
            <hr className="border-gray-300" />
            <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              magni fugiat, odit incidunt necessitatibus aut nesciunt
              exercitationem aliquam id voluptatibus quisquam maiores officia
              sit amet accusantium aliquid quo obcaecati quasi.
            </p>
            <hr className="border-gray-300" />
            
          </div>
        </div>
{/**second post */}
        <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3" onClick={()=>{
            handleClick('2');
        }} id="2">
          <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-blanc rounded-lg shadow-lg hover:shadow-2xl">
            <div className="md:flex-shrink-0">
              <img
                src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
                alt="Blog Cover"
                className="object-fill w-full rounded-lg rounded-b-none md:h-56"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
              <span className="text-xs font-medium text-blue-600 uppercase">
                Web Programming
              </span>
              <div className="flex flex-row items-center">
                <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <span>1.5k</span>
                </div>

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span>25</span>
                </div>

                <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                  <span>7</span>
                </div>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
              <a href="#" className="hover:underline">
                <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                  Ho to Yawn in 7 Days
                </h2>
              </a>
            </div>
            <hr className="border-gray-300" />
            <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              magni fugiat, odit incidunt necessitatibus aut nesciunt
              exercitationem aliquam id voluptatibus quisquam maiores officia
              sit amet accusantium aliquid quo obcaecati quasi.
            </p>
            <hr className="border-gray-300" />
            <section className="px-4 py-2 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                    alt="Avatar"
                  />
                  <div className="flex flex-col mx-2">
                    <a
                      href=""
                      className="font-semibold text-gray-700 hover:underline"
                    >
                      Fajrian Aidil Pratama
                    </a>
                    <span className="mx-1 text-xs text-gray-600">
                      28 Sep 2020
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-600">9 minutes read</p>
              </div>
            </section>
          </div>
        </div>

        

        

       
        
      </section>
    </>
  );
};
export default Postpage;
