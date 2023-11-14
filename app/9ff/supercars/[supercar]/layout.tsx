import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PorscheNavbar, { Footer } from '../../homePage'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en  ">
      <PorscheNavbar/>
      <body className={'bg-stone-200  h-auto'}>{children}</body>
      <div className='w-3/4 mx-auto m-0 p-0'>
        <Footer text='Are one of our 9FF Supercars a question for you?'/>
      </div>
    </html>
  )
}
