'use client'
import NavBar from "../components/NavBar";
import Button from '../components/Button';
import { useState } from "react";
import Image from 'next/image';
import { addPost } from "../redux/slices/postSlices/PostThunk";
import { useDispatch} from 'react-redux';
import requireAuth from "../requireAuth";
import getUserIdFromCookie from '../getUserIdFromCookie';
import axios from 'axios';
const AddPost = () => {
    requireAuth();
    const dispatch = useDispatch();
    const userId = getUserIdFromCookie();
    const [form, setForm] = useState({
        user: userId,
        titre: '',
        contenu: '',
        images: []
    });
   
   
    const uploadImages = async (e) => {
       // setIsLoading(true);   
         try {
            const formData = new FormData();
            formData.append("file", e.target.files.item(0));
            formData.append("upload_preset", "ml_default");
            await axios.post("https://api.cloudinary.com/v1_1/ds1dvhn4a/image/upload", formData)
                .then(res => {
                    const imageUrl = res.data.secure_url;
                    setForm(prevForm => ({ ...prevForm, images: [...prevForm.images, imageUrl] }));
                });
            //setIsLoading(false);
        } catch (error) {
            console.log(error);
            //setIsLoading(false);
        }
    };
  


    const addOnePost =()=>{
        console.log(userId);
        dispatch(addPost(form));
        setForm({...form,
        titre: '',
        contenu: '',
        images: []})
    }
    return (
        <>
            <NavBar />
            <div className="bg-blanc mt-20 shadow p-4 py-8 font-serif">
                <div className="heading text-center font-bold text-2xl m-5 text-black-maron font-serif">New Post</div>
                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-bleu-ciel p-4 shadow-lg max-w-2xl">
                    <input className="title bg-bleu-ciel border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })} />
                    <textarea className="description bg-bleu-ciel sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" value={form.contenu} onChange={(e) => setForm({ ...form, contenu: e.target.value })}></textarea>


                    <div id="preview" className="my-4 flex flex-wrap">
                    <div className="w-full">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-black-maron  capitalize">image</label>
                                <input type="file" id="image" className="bg-blanc border border-black-maron text-black-maron text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-none" placeholder="image" onChange={(e) => uploadImages(e)} multiple={false} />
                            </div>
              
                    </div>

                    <div className="buttons flex justify-end">
                        <Button onClick={addOnePost}>Post</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPost;
