import Image from "next/image";
import logo from '../assets/logo_file_rouge.png';
import Aos from "aos";
export default function Home() {
  return (
  <>
   <header
    className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-blanc py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <Image className="w-10 h-10" src={logo} alt=""/>
                    <p className="sr-only">Website Title</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Home</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#about">About</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#contact">Contact</a>
            </div>
            <div className="flex items-center justify-end gap-3">
                <a className="hidden items-center justify-center rounded-xl bg-bleu-ciel px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/login">Sign in</a>
                <a className="inline-flex items-center justify-center rounded-xl bg-jaune px-3 py-2 text-sm font-semibold text-blanc shadow-sm transition-all duration-150 hover:bg-bleu-ciel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login">Login</a>
            </div>
        </div>
    </div>
</header>
<section className="bg-black-maron py-20">
    <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-orange">
                <h1 className="text-orange font-bold text-5xl leading-tight mb-6 p-1 font-HeadingFont">Welcome to Cook Connect</h1>
                <p className="text-white text-xl mb-8 p-1 font-BodyFont">Where cooking enthusiasts come together to share, connect, and inspire.</p>
                <a href="#"
                    className="px-6 py-3 bg-jaune text-black-maron font-bold rounded-full hover:bg-bleu-ciel transition duration-200 font-BodyFont">Join us</a>
            </div>
            <div className="md:w-1/2">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee beans"
                    className="w-full rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
</section>

           
            
            {/**<div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="../assets/logo file rouge.png" alt="Coffee"
                    className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-700 font-medium">$12.99</span>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
  </div>**/}

<section className="py-20 bg-blanc" id="about">
    <div class="lg:px-96 md:px-20">
        <div class="flex pt-2 justify-center items-center text-3xl font-bold text-orange mb-8 font-HeadingFont">
            About Us
        </div>
        <br />
        
        <p class="p-4 text-2xl text-md sm:text-left sm:text-1xl md:text-left md:text-1xl  font-sans overflow-hidden  font-BodyFont text-black-maron ">
                              We are passionate about the culinary diversity that enriches our lives around the globe. Our website was created with a simple yet powerful mission: to explore and celebrate the unique culinary treasures from every corner of the planet, delivered straight to your doorstep.

                  Through a blend of history, flavors, and traditions, we invite you on a captivating gastronomic journey, where each dish tells a story, each recipe shares a tradition, and each bite opens a window into a different culture.

                  Whether you're a seasoned culinary explorer or a novice eager to learn, our site is designed to inspire, educate, and connect you through the universal magic of food.

                  Explore our articles rich with anecdotes about iconic dishes, discover authentic recipes passed down through generations, learn unique culinary techniques from each region, and immerse yourself in the fascinating narratives that surround each plate.

                  Join our vibrant community of passionate foodies, share your own culinary stories, exchange tips and recipes with people from around the world, and get ready to embark on an unforgettable journey through the cuisines of the world.

                  Prepare to awaken your taste buds, broaden your culinary horizons, and discover a multitude of gastronomic delights that celebrate the richness and diversity of our world.

                  Welcome to our global kitchen. Welcome home.
        </p>
        
        </div>
    </section>
  <section id="contact">
<div className="pb-10 bg-blanc w-[100%] h-[100%]" data-aos="zoom-in-up">
            <div className="grid  font-BodyFont sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-bleu-ciel shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]" >
                <div>
                    <h1 className="text-3xl text-orange font-HeadingFont font-bold">Let's Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-12">
                        <h2 className="text-lg text-black-maron font-HeadingFont font-bold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#291f1d'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#291f1d] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>aichaazeroual03@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg text-black-maron font-HeadingFont font-bold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#291f1d'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#291f1d'
                                        viewBox="0 0 511 512">
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#291f1d'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] bg-blanc" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] bg-blanc" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] bg-blanc" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff] bg-blanc"></textarea>
                    <button type='button'
                        className="text-black-maron bg-jaune hover:bg-black-maron hover:text-blanc font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    
  </section>

<footer className="bg-black-maron text-blanc font-BodyFont">
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Terms of Service</a>
            </div>

            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Privacy Policy</a>
            </div>
        </nav>
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">LinkedIn'</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fbf7eb'
                                        viewBox="0 0 511 512">
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000" />
                                    </svg>
        </a>
        </div>
        <div className="mt-8  md:order-1 md:mt-0 ">
            <p className="text-center text-base text-white">
                &copy; SvelteKit Blog App. MIT Licensed.
            </p>
        </div>
    </div>
</footer>
  </>
  );
}
