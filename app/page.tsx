import CardGrid from '@/public/cars/page';
import BrandpadApp from './Brandpad/app';
'use client';


import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import '/public/globals.css'
import MonsterCatPage from './Monstercat/monsterCatPage';
import ApplePage from '@/carousalWebsiteApple/page';
import TimelinePage, { RealSVG } from '@/nurburgring/page';
import WordleGame from '@/wordleGame.tsx/page';
import { VaporwaveBackground } from '@/nurburgring/page';
import Home from '@/app/issmi/page';
import Navbar from './issmi/navbar';
import Grid from './issmi/grid';

export default function Page() {

  return (
    <div className='w-full h-auto'>
      <div className='textIndicator top-2/3 h-1/3 w-full absolute'></div>
      <Home />
    </div>
  )
}