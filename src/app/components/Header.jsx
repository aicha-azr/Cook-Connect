import Image from "next/image";
import logo from "../../../public/assets/logo_file_rouge.png";
const Header =  async()=>{
    
     
    return(<>
       
       <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-blanc py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
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
                href="/about"
              >
                About
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/contact"
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
    
    </>)
}
export default Header;