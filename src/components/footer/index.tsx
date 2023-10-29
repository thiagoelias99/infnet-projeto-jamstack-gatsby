import React from 'react'
import SignContainer from './Sign-Container'
import LinksContainer from './Links-Container'

export default function Footer() {
    return (
        <footer className='bg-black min-h-[96px] flex justify-start items-center'>
            <div className='flex flex-row max-w-[1024px] mx-auto h-full w-full justify-between items-center'>
                <SignContainer />
                <LinksContainer />
            </div>
        </footer>
    )
}
