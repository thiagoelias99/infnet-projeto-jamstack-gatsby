import React from 'react'
import Logo from './logo'
import Search from './search'

export default function index() {
    return (
        <div className='flex flex-row w-full h-20 justify-between items-center max-w-[1024px] m-auto'>
            <Logo />
            <Search />
        </div>
    )
}
