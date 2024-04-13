"use client"

import Image from "next/image";
import logo from '../../../../public/assets/logo_file_rouge.png'
import SignUpForm from '../../components/SignUpForm' 
import brand from '../../../../public/assets/2.png'
export default function Page() {
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
  <main className="flex items-center justify-center md:h-screen ">
      <div className=" flex items-center w-full max-w-[400px] flex-col  p-4 md:-mt-32">
       
          <div className="w-32 text-white flex  justify-center md:w-36">
           <Image src={logo} width={400} height={400}/>
          </div>
        
        <SignUpForm/>
      </div>
    </main>
  </div>
  </>);
}

/**
<SignUp className=" flex items-center justify-center"/>
 const Signup = ()=>{
     return(
         <section class="flex flex-col items-center pt-6">
   <div
     class="w-full bg-bleu-ciel rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
     <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
       <h1 class="text-xl font-bold leading-tight tracking-tight text-black-maron md:text-2xl dark:text-white">Create an
         account
       </h1>
       <form class="space-y-4 md:space-y-6" method="POST">
         <div>
           <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
           <input type="text" name="name" id="name" class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson" required=""/>
         </div>
         <div>
           <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
           <input type="text" name="username" id="username" class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24" required=""/>
         </div>
         <div>
           <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
           <input type="password" name="password" id="password" placeholder="••••••••" class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
         </div>
         <button type="submit" class="w-full text-black-maron font-bold bg-jaune hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
         <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
             class="font-medium text-orange hover:underline dark:text-blue-500" href="/login">Sign in here</a>
         </p>
       </form>
     </div>
   </div>
 </section>
     )
 }
 export default Signup;
 * 
 */