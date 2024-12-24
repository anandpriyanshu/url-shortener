import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 flex justify-between px-4 items-center bg-blue-400 text-white'>
            <div className="logo font-bold text-lg">
                <Link href='/'>LinkShortner</Link>
            </div>
            <ul className='flex gap-6 justify-center items-center'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/shorten'>Shorten</Link>
                <Link href='/contact'>Contact Us</Link>

                <div className=' flex gap-3'>
                    <Link href="/shorten"><button className='bg-blue-600 rounded-lg p-2 font-bold'>Try now</button></Link>
                    <Link href="/github"><button className='bg-blue-600 rounded-lg p-2 font-bold'>Github</button></Link>
                </div>
            </ul >
        </nav >
    )
}

export default Navbar