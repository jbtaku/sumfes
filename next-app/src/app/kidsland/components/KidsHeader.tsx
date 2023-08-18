import Link from 'next/link'
import React from 'react'
import { menu } from '../utils/menu'

function KidsHeader() {
    return (
        <header className='bg-gray-100 md:grid md:grid-cols-3'>
            <h1 className='col-span-1 m-3'>
                <Link href="/">
                    <img src="/images/logo_page.png" height="50" width="191" alt="サマーフェスティバルHAKUSAN" />
                </Link>
            </h1>
            <nav className='sm:col-span-2'>
                <ul className='flex'>
                    {menu.map((item) => {
                        return (
                            <li className='border-2 bg-green-200 text-[0.1em] sm:text-base font-medium' key={item.title}><Link href={item.link}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default KidsHeader