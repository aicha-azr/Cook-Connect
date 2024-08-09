"use client";

import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";


    const modules = {
        toolbar: [
            [{ header: '2' },{ header: '3' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image'
    ];
    const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Add = () => {
   const [value, setValue] = useState('')


    return (
        <>
        <div className="grid grid-rows-10 h-screen">
        <div className="row-span-1 z-10">
            <NavBar />
        </div>
            <div className="row-span-9  mx-5 grid gap-2">
                <h1 className="text-center font-serif font-bold text-xl text-black-maron">Write your Post</h1>
            <div className="flex flex-col">
                <label htmlFor="title" className="font-bold font-serif text-black-maron">The title:</label>
                <input type="text" placeholder="Write the title" name="title" className="border border-bleu-ciel focus:outline-none focus:ring-0" required/>
            </div>
            <ReactQuill 
                        value={value} 
                        onChange={setValue} 
                        modules={modules} 
                        formats={formats}
                        theme="snow" // Ensures the correct theme is applied
                        placeholder="Write your recipe"
                    />
            <ReactQuill                         
                        modules={modules} 
                        formats={formats}
                        theme="snow" // Ensures the correct theme is applied
                        placeholder="Write your recipe"
                    />
            </div></div>
        </>
    );
};

export default Add;
