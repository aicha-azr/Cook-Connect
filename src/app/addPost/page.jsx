'use client'
import NavBar from "../components/NavBar";
import Button from '../components/Button';
import { useState } from "react";
const addPost = ()=>{
    const [form, setForm] = useState({
        title: '',
        contenu: '',
        images: []
    })
    return(
        <>
        <NavBar/>



        <div className="bg-white shadow p-4 py-8" x-data="{ images: [] }">
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">New Post</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text"  value={form.title} onChange={(e) => setForm({...form, title:e.target.value})} />
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here"  value={form.contenu} onChange={(e) => setForm({...form, contenu:e.target.value})}></textarea>

        <div className="icons flex text-gray-500 m-2">
          <label id="select-image">
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <input hidden type="file" multiple  />
          </label>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>

        <div id="preview" className="my-4 flex">
         
        </div>

        <div className="buttons flex justify-end">
          <Button>Post</Button>
        </div>
      </div>
    </div>



        </>
    )
}
export default addPost;