import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Header from '@/app/components/Header';
import logo from "../../../public/assets/logo_file_rouge.png";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs"
export default async function Page() {
    const {userId} = auth()
    const user = await currentUser();
   return(<>
  <Header />
  
  </>)
}