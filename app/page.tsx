"use client";

import { useRouter } from 'next/navigation';


import BackgroundGrid from './backgroundGrid'
import '/public/globals.css'


export default function Page() {

  const router = useRouter();



  return (
    <div id='page' className=' w-full h-full relative'>
      <BackgroundGrid />
      <div className="grid grid-cols-3 bottom-20 left-1/2 -translate-x-1/2 h-2/3 w-2/3 gap-8 absolute  ">
        <div onClick={() => { router.push('/9ff/') }} className="shadow-customShadow cursor-pointer rounded-2xl p-[3px] h-full bg-gradient-to-br from-[#743ad5] to-[#d53a9d] transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-black text-white  text-4xl font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to 9ff
            <div className='p-4 text-2xl'>
              <p>Now with: Service/models page & Supercars Page</p>
            </div>
          </div>
        </div>
        <div onClick={() => { router.push('/Monstercat/') }} className="shadow-customShadow cursor-pointer rounded-2xl p-[3px] h-full bg-gradient-to-br from-[#743ad5] to-[#d53a9d] transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-black text-white  text-4xl font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to Monstercat homepage
          </div>
        </div>
        <div onClick={() => { router.push('/ISSMI/') }} className="shadow-customShadow cursor-pointer rounded-2xl p-[3px] h-full bg-gradient-to-br from-[#743ad5] to-[#d53a9d] transition duration-75 hover:scale-[1.02] hover:-translate-y-4 ">
          <div className='bg-black text-white  text-4xl font-semibold p-8 w-full h-full rounded-2xl '>
            Click here to go to ISSMI homepage
          </div>
        </div>

      </div>
    </div>
  )
}