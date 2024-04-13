import Image from 'next/image';
import brand from '../../../public/assets/cookconnect.png'
import { Github, Linkedin } from 'lucide-react';
const Footer =()=>{
    return(<>
   
<footer className="relative bg-bleu-ciel pt-8 pb-6 border-t border-orange">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <Image src={brand} widht={150} height={150} alt="CookConnect"/>
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <div className="mt-6 lg:mb-0 mb-6 flex ">
          <a className="flex bg-jaune text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" href="https://www.linkedin.com/in/azeroual-aicha-a9433a216">
          <Linkedin color="#291f1d"/></a>
          <a className="bg-jaune flex  text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" href='https://github.com/aicha-azr'>
          <Github color="#291f1d" /></a>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>   
  </div>
</footer>
      
    </>)
}
export default Footer;