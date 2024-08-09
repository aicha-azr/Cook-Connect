"use client"
import Image from "next/image";
import logo from '../../../public/assets/logo_file_rouge.png'
import {useState} from 'react';
import axios from "axios";
import { setCookie } from 'cookie';
import redirectToHomePage from '../redirectToHomePage';
export default function Page() {
  redirectToHomePage();
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
   e.preventDefault();
   try{const result = await axios.post('http://localhost:3000/api/login', {email, mot_de_passe});
    console.log(result.data)
    const { token } = result.data; 
    setCookie('token', token, 1); 
    console.log('Login successful. Token stored in cookie.');
    alert('Login successful.');
  } catch(e){
      console.log('error: ', e)
    }
  }







  return (<>
    <div className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-blanc py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg lg:mt-1">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <Image className="w-10 h-10" src={logo} alt="" />
                <p className="sr-only">Website Title</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              
              
             
            </div>
            <div className="flex items-center justify-end gap-3">
              <a
                className="hidden items-center justify-center rounded-xl bg-bleu-ciel px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/sign-in"
              >
                Log in
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-jaune px-3 py-2 text-sm font-semibold text-black-maron shadow-sm transition-all duration-150 hover:bg-bleu-ciel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/sign-up"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>








    <div className='flex justify-center mt-10 lg:mt-0 '>
  <div className="flex items-center justify-center  ">
      <div className=" flex items-center w-full max-w-[400px] flex-col p-4">
       
          <div className="w-32 text-white flex  justify-center md:w-36">
           <Image src={logo} width={100} height={100}/>
          </div>
            
<div
    className="relative mx-auto mt-10 w-full max-w-md border border-bleu-ciel px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-xl sm:px-10 text-black-maron">
    <div className="w-full flex flex-col gap-2">
        <div className="text-center">
            
            <p className=" text-black">Log in below to access your account</p>
        </div>
            <form onSubmit={handleLogin}>
                <div className="flex gap-0.5 flex-col">
                   <label for="email" className="text-sm">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer rounded-xl bg-blanc mt-1 w-full border-b-2 border-bleu-ciel px-1 focus:ring-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                   
                </div>
                <div className="flex gap-0.5 flex-col">
                  <label for="password" className="text-sm">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="peer rounded-xl bg-blanc mt-1 w-full border-b-2 border-bleu-ciel px-1 focus:ring-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"  value={mot_de_passe} onChange={(e)=>setMot_de_passe(e.target.value)} required/>
                    
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-xl bg-black-maron px-3 py-2 text-jaune font-bold focus:bg-gray-600 focus:outline-none">Log in</button>
                </div>
                <p className="text-center text-sm text-black-maron">Don&#x27;t have an account yet? 
                    <a href="/signin"
                        className="font-semibold text-gray-600 hover:underline text-orange focus:outline-none"> Sign
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
