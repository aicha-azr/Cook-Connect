"use client"
import Image from "next/image";
import logo from '../../../public/assets/logo_file_rouge.png'
import {useState} from 'react';
import axios from "axios";
import { setCookie } from 'cookie';

export default function Page() {
const [email, setEmail] = useState('');
const [mot_de_passe, setMot_de_passe] = useState('');
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
  const handleLogin= async(e)=>{
   // e.preventDefault();
   try{const result = await axios.post('http://localhost:3000/api/login', {email, mot_de_passe});
    console.log(result.data)
    const { token } = result.data; // Assuming the token is returned in the response
    setCookie('token', token, 1); // Token expires in 1 day
    console.log('Login successful. Token stored in cookie.');
  } catch(e){
      console.log('error: ', e)
    }
  }




  // Function to get the value of a cookie by name
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
          return cookieValue;
      }
  }
  return null;
}

// Function to check if the user is authenticated (has a token)
function isAuthenticated() {
  const token = getCookie('token');
  return token !== null && token !== undefined;
}

// Function to redirect the user to the home page
function redirectToHomePage() {
  window.location.href = '/homePage'; // Adjust the URL as needed
}

// Check if the user is authenticated when the page loads
window.onload = function() {
  if (isAuthenticated()) {
      redirectToHomePage();
  }
};

  return (<>
    <header className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-blanc py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <Image className="w-10 h-10" src={logo} alt="" />
                <p className="sr-only">Website Title</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/"
              >
                Home
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#about"
              >
                About
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#contact"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <a
                className="hidden items-center justify-center rounded-xl bg-bleu-ciel px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/sign-in"
              >
                Login
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-jaune px-3 py-2 text-sm font-semibold text-blanc shadow-sm transition-all duration-150 hover:bg-bleu-ciel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/sign-up"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </header>








    <div className='flex justify-center mt-10 lg:mt-20 pt-2'>
  <div className="flex items-center justify-center md:h-screen ">
      <div className=" flex items-center w-full max-w-[400px] flex-col  p-4 md:-mt-32">
       
          <div className="w-32 text-white flex  justify-center md:w-36">
           <Image src={logo} width={400} height={400}/>
          </div>
            
<div
    className="relative mx-auto mt-10 w-full max-w-md bg-bleu-ciel px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            
            <p className="mt-2 text-gray-500">Log in below to access your account</p>
        </div>
            <form action="post" onSubmit={handleLogin}>
                <div className="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer rounded-md bg-blanc mt-1 w-full border-b-2 border-black-maron px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 bg-blanc rounded-md w-full border-b-2 border-black-maron px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"  value={mot_de_passe} onChange={(e)=>setMot_de_passe(e.target.value)} required/>
                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-jaune px-3 py-4 text-black-maron font-bold focus:bg-gray-600 focus:outline-none">Log in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <a href="/signin"
                        className="font-semibold text-gray-600 hover:underline focus:text-orange focus:outline-none">Sign
                        up
                    </a>
                </p>
            </form>
       
 </div>
</div>
        
      </div>
    </div>
    </div>





    </>);
}
