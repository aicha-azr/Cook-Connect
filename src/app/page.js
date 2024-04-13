"use client"
import Image from "next/image";
import logo from '../../public/assets/logo_file_rouge.png'
import Aos from "aos";
import Header from './components/Header'
import Footer from './components/Footer'
import cookImage from '../../public/assets/Designer-removebg-preview.png'
export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-blanc">
        <div className="container mx-auto px-4 mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-orange">
              <h1 className="text-orange font-bold text-5xl leading-tight mb-6 p-1 font-HeadingFont">
                Welcome to Cook Connect
              </h1>
              <p className="text-black-maron text-xl mb-8 p-1 font-BodyFont">
                Where cooking enthusiasts come together to share, connect, and
                inspire.
              </p>
              <a
                href="/sign-up"
                className="px-6 py-3 bg-jaune text-black-maron font-bold rounded-full hover:bg-bleu-ciel transition duration-200 font-BodyFont"
              >
                Join us
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src={cookImage}
                alt="..."
                className="w-full  "
              />
            </div>
          </div>
        </div>
      </section>


     <Footer/>
    </>
  );
}
