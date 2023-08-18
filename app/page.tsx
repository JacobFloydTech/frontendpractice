import CardGrid from '@/carGrid/page';
import BrandpadApp from './Brandpad/app';

import './globals.css';
import MonsterCatPage from './Monstercat/monsterCatPage';

export default function Page() {
  return (
    <div className='min-w-screen min-h-screen p-0 m-0 overflow-x-hidden'>
      <CardGrid />
    </div>
  )
}