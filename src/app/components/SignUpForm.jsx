"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
 // const [formData, setFormData] = useState({});
  const [nom, setNom]= useState('');
  const [email, setEmail] = useState('');
  const [mot_de_passe, setMot_de_passe]= useState('');
  const [errorMessage, setErrorMessage] = useState("");

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res1 = await axios.post("/api/users", {nom, email, mot_de_passe});
      console.log(res1.data);
  
      if (!res1.data) {
        const response = await res1.json(); 
        setErrorMessage(response.message);
      } else {
        router.push("/sign-in"); // Removed router.refresh()
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle error, show error message, etc.
    }
  };
  

  return (
    <>
      <section class="flex flex-col items-center pt-6">
   <div
     class="w-full bg-bleu-ciel rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
     <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
       <h1 class="text-xl font-bold leading-tight tracking-tight text-black-maron md:text-2xl dark:text-white">Create an
         account
       </h1>
       <form class="space-y-4 md:space-y-6" method="POST" onSubmit={handleSubmit}>
         <div>
           <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
           <input type="text" name="name" id="name" class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson" 
          onChange={(e)=>setNom(e.target.value)}
          required={true}
          value={nom}/>
         </div>
         <div>
           <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
           <input type="email"  class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24@gmail.com"  id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          required={true}
          value={email}/>
         </div>
         <div>
           <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
           <input type="password" name="password" id="password" placeholder="••••••••" class="bg-blanc border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          onChange={(e)=>setMot_de_passe(e.target.value)}
          required={true}
          value={mot_de_passe}/>
         </div>
         <button type="submit" class="w-full text-black-maron font-bold bg-jaune hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
         <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
             class="font-medium text-orange hover:underline dark:text-blue-500" href="/login">Sign in here</a>
         </p>
       </form>
     </div>
   </div>
 </section>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
