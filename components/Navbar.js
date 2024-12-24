import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 flex justify-between px-4 items-center bg-blue-500 text-white'>
            <div className="logo font-bold text-lg">LinkShortner</div>
            <ul className='flex gap-6 justify-center items-center'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/generate'>Shorten</Link>
                <Link href='/contact'>Contact Us</Link>

                <li className=' flex gap-3'>
                    <Link href="/generate"><button className='bg-blue-600 rounded-lg p-2 font-bold'>Try now</button></Link>
                    <Link href="/github"><button className='bg-blue-600 rounded-lg p-2 font-bold'>Github</button></Link>
                </li>
            </ul >
        </nav >
    )
}

export default Navbar