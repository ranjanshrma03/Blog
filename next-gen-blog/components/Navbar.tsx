import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <Link href="/">
                <div className='flex items-center cursor-pointer'>
                    <Image src="/logo.png" height={35} width={40} alt="logo" />
                    <span className="font-bold ml-2 text-primary">
                        Ranjan&apos;s Blog
                    </span>
                </div>
            </Link>
            <ul className='flex'>
                <li className='mr-6 font-medium text-gray-600'><Link href='/'>Products</Link></li>
                <li className='mr-6 font-medium text-gray-600'><Link href='/'>Pricing</Link></li>
                <li className='mr-6 font-medium text-gray-600'><Link href='/'>Docs</Link></li>
                <li className='mr-6 font-medium text-gray-600'><Link href='/'>Company</Link></li>
                <li className='mr-6 font-medium text-gray-600'><Link href='/'>Contact</Link></li>
            </ul>
            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'><a className='hover:text-gray-400'>Log In</a></li>
                <li className='font-medium text-gray-600'><a className='bg-primary px-4 py-2 rounded-sm text-white hover:bg-primary-dark cursor-pointer transition-all'>Sign Up</a></li>
            </ul>
        </nav >
    )
}

export default Navbar