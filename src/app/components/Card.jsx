import Image from "next/image";
import picture from '../../../public/assets/cookconnect.png'
const Card = ()=>{
    return(<>
        <div className="flex flex-col bg-blanc rounded-xl shadow shadow-md p-1 px-2">
            <div className="border-b border-black">
                <p>posted by MEDO </p>
            </div>
            <div className="flex flex-col">
                <div className="h-[200px] ">

                <Image src={picture} className="object-contain h-full w-full"  />
                </div>
                <h3 className='font-bold'>the title</h3> 
                <p className='text-sm text-bleu-ciel'>Discription <span className='hover:cursor text-orange text-xs'>show more</span></p>

            </div>
            <div>
                Comments and Reacts
            </div>

        </div>
    </>)
}
export default Card;