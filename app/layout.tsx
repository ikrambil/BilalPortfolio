import './globals.css'
import Header from '@/components/header'
import { SpeedInsights } from "@vercel/speed-insights/next"

import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";


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
        <SpeedInsights />
        <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
