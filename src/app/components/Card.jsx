import Image from "next/image";
import { CircleUser } from "lucide-react";
const Card = ({title, image, description, name, onClick, date})=>{
    return(<>
        <div className="flex flex-col bg-blanc rounded-xl shadow shadow-lg p-1 px-2 gap-2 " onClick={onClick}>
            <div className="border-b border-bleu-ciel flex gap-2 p-2">
              <div className="rounded-full bg-bleu-ciel"><CircleUser /></div> 
                <p> {name} </p>
            </div>
            <div className="flex flex-col">
            <div className="h-[250px] w-full relative">
            <Image src={image[0]} alt={title} layout="fill" className="object-cover z-0" />
                </div>
                <h3 className='font-bold'>{title}</h3> 
                <p className='text-sm text-black'>{description.substring(0, 160) + "..."} <span className='hover:cursor-pointer text-jaune text-xs font-bold'>show more</span></p>

            </div>
            <p className="text-bleu-ciel text-xs font-light">
               published at {date.substring(0, 10)}
            </p>

        </div>
    </>)
}
export default Card;