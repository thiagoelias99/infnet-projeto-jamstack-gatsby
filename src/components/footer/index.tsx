import React from 'react'
import SignContainer from './Sign-Container'
import LinksContainer from './Links-Container'
import { SubscriptionDialog } from '../subscription-dialog/SubscriptionDialog'

export default function Footer() {
    return (
        <footer className='bg-black min-h-[96px] p-4 mt-10'>
            <div className='flex justify-start items-center'>
                <div className='flex flex-row max-w-[1024px] mx-auto h-full w-full justify-between items-center'>
                    <SignContainer />
                    <SubscriptionDialog />
                    <LinksContainer />
                </div>
            </div>
        </footer>
    )
}
