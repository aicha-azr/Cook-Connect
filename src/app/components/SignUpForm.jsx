"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
 
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
        router.push("/sign-in"); 
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  

  return (
    <>
      <section className="flex flex-col items-center pt-6 w-full">
   
     <div className="p-6  md:space-y-6 sm:p-8 w-fit border border-bleu-ciel rounded-xl flex flex-col ">
       <h1 className="text-xl font-bold leading-tight tracking-tight text-black-maron md:text-2xl dark:text-white">Create an
         account
       </h1>
       <form className="w-fit flex flex-col gap-3" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:gap-3 md:w-fit w-full  ">
         <div >
           <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
           <input type="text" name="name" id="name" className="peer rounded-xl bg-blanc mt-1 w-full border-b-2 border-bleu-ciel px-1 focus:ring-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none w-full md:min-w-[250px]"placeholder="Emelia Erickson" 
          onChange={(e)=>setNom(e.target.value)}
          required={true}
          value={nom}/>
         </div>
         <div>
           <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
           <input type="email"  className="peer rounded-xl bg-blanc mt-1 w-full border-b-2 border-bleu-ciel px-1 focus:ring-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none md:min-w-[250px]"  id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          required={true}
          value={email}/>
         </div>
</div>
         <div>
           <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
           <input type="password" name="password" id="password" placeholder="••••••••" class="peer rounded-xl bg-blanc mt-1 w-full border-b-2 border-bleu-ciel px-1 focus:ring-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
          onChange={(e)=>setMot_de_passe(e.target.value)}
          required={true}
          value={mot_de_passe}/>
         </div>
         <button type="submit" className="w-full rounded-xl bg-black-maron px-3 py-2 text-jaune font-bold focus:bg-gray-600 focus:outline-none">Create an account</button>
         <p className="text-center text-sm text-black-maron">Already have an account? <a
             className="font-medium text-orange hover:underline dark:text-blue-500" href="/login">Sign in here</a>
         </p>
       </form>
     </div>
   
 </section>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
