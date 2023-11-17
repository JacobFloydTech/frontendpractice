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
      <body className={'bg-stone-200  h-auto'}>

        {children}
  
        <Footer text='Are one of our 9FF Supercars a question for you?'/>
        
        </body>

    </html>
  )
}
