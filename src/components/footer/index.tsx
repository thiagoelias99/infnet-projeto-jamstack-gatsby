import React from 'react'
import SignContainer from './Sign-Container'
import LinksContainer from './Links-Container'

export default function Footer() {
    return (
        <footer className='bg-black h-[156px]'>
            <div className='flex flex-row max-w-[1024px] mx-auto h-full justify-between items-center'>
                <SignContainer />
                <LinksContainer />
            </div>
        </footer>
    )
}
