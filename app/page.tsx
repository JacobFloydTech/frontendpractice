"use client";

import { useRouter } from 'next/navigation';


import BackgroundGrid from './backgroundGrid'
import '/public/globals.css'
import ThreeJSBackground from './background/page';


export default function Page() {

  const router = useRouter();



  return (
    <div id='page' className=' w-full h-full md:text-4xl relative'>
      <div className='w-full h-full absolute top-0 left-0'>
        <BackgroundGrid/>
      </div>
      <div className="grid md:grid-cols-3 md:bottom-20 my-4 left-1/2 -translate-x-1/2 md:h-2/3 h-1/2 md:w-2/3 w-full md:gap-8 gap-4 absolute  ">
        <div onClick={() => { router.push('/9ff/') }} style={{backgroundImage: "linear-gradient(135deg, rgb(116, 58, 213, 0.4), rgb(213, 58, 157, 0.4)"}} className="shadow-customShadow cursor-pointer rounded-2xl p-[7px] h-full transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-[#1A1A1A] bg-opacity-70 text-white   font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to 9ff
            <div className='p-4 text-2xl'>
              <p>Now with: Service/models page & Supercars Page</p>
            </div>
          </div>
        </div>
        <div onClick={() => { router.push('/Monstercat/') }} style={{backgroundImage: "linear-gradient(135deg, rgb(116, 58, 213, 0.4), rgb(213, 58, 157, 0.4)"}}  className="shadow-customShadow cursor-pointer rounded-2xl p-[7px] h-full  transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-[#1A1A1A] bg-opacity-70 text-white  font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to Monstercat homepage
          </div>
        </div>
        <div onClick={() => { router.push('/issmi/') }} style={{backgroundImage: "linear-gradient(135deg, rgb(116, 58, 213, 0.4), rgb(213, 58, 157, 0.4)"}}  className="shadow-customShadow cursor-pointer rounded-2xl p-[7px] h-full  transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-[#1A1A1A] bg-opacity-70 text-white   font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to ISSMI homepage
            <div className='p-4 text-2xl'>
              <p>Now with: About Page,  Auction Page</p>
              <p>Constructing Sell page</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}