import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
  import { auth, currentUser } from "@clerk/nextjs";
const Header =  async()=>{
    
     
    return(<>
       
    
    <header className="bg-blanc border-gray-200 shadow-sm shadow-black-maron">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="h-8 w-8" alt="Flowbite Logo" />
            <span className="self-center text-black-maron text-2xl md:text-1xl font-semibold whitespace-nowrap dark:text-white">CookConnect</span>
          </a>
         
          <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
          
        </div>
      </header>
    </>)
}
export default Header;