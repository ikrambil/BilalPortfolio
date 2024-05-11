import './globals.css'
import Header from '@/components/header'
import Head from 'next/head';
import { Fahkwang, Inter, Raleway } from 'next/font/google'

import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Raleway({ weight: ["400"], subsets: ["latin-ext"] })

export const metadata = {
  title: 'Bilal | Personal Portfolio',
  description: 'Bilal Ikram is a Software Developer its 1.5 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`bg-[#f6f2e5] text-[#292929] relative overflow-x-hidden`}>
        <ActiveSectionContextProvider>
        <Header/>    
        {children}
        <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
