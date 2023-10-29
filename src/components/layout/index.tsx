import React from 'react'
import Header from '../header'
import Footer from '../footer'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className='w-screen min-h-screen m-auto flex flex-col justify-between overflow-hidden'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
