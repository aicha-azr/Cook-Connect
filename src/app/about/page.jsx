import Image from "next/image";
import Header from '../components/Header'
import brand from '../../../public/assets/cookconnect.png'
import Footer from "../components/Footer";
const About = ()=>{

return(<>
<Header />
<div class="py-16 bg-blanc mt-20">  
  <div class=" m-auto px-6  md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="lg:w-5/12 flex items-center justify-center">
          <Image src={brand} alt="image" loading="lazy" width={400} height={400}/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-black-maron text-center font-bold md:text-4xl">About us</h2>
          <p class="mt-6 text-black-maron text-center">We are passionate about the culinary diversity that enriches our lives around the globe. Our website was created with a simple yet powerful mission: to explore and celebrate the unique culinary treasures from every corner of the planet, delivered straight to your doorstep. Through a blend of history, flavors, and traditions, we invite you on a captivating gastronomic journey, where each dish tells a story, each recipe shares a tradition, and each bite opens a window into a different culture. Whether you're a seasoned culinary explorer or a novice eager to learn, our site is designed to inspire, educate, and connect you through the universal magic of food. Explore our articles rich with anecdotes about iconic dishes, discover authentic recipes passed down through generations, learn unique culinary techniques from each region, and immerse yourself in the fascinating narratives that surround each plate. Join our vibrant community of passionate foodies, share your own culinary stories, exchange tips and recipes with people from around the world, and get ready to embark on an unforgettable journey through the cuisines of the world. Prepare to awaken your taste buds, broaden your culinary horizons, and discover a multitude of gastronomic delights that celebrate the richness and diversity of our world. Welcome to our global kitchen. Welcome home.</p>
          
        </div>
      </div>
  </div>
</div>
<Footer/>
</>)

}
export default About;