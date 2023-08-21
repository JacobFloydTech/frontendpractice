import CardGrid from '@/carGrid/page';
import BrandpadApp from './Brandpad/app';

import '/public/globals.css'
import MonsterCatPage from './Monstercat/monsterCatPage';
import ApplePage from '@/carousalWebsiteApple/page';

export default function Page() {
  return (
    <div className='w-screen h-screen p-0 m-0'>
      <ApplePage />
    </div>
  )
}