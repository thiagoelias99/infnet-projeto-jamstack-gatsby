import React from 'react'
import Logo from './logo'
import Search from './search'
import Links from './links'

export default function index() {
    return (
        <header className=' mx-auto absolute w-screen h-24 z-50 p-4 bg-black'>
            <div className='flex flex-row w-full h-full justify-between items-end max-w-[1024px] mx-auto'>
                <Logo />
                <Links />
                <Search />
            </div>
        </header>
    )
}
