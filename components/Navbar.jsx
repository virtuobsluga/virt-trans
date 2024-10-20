
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px8 py-3">
            <Link className="text-white font-bold mx-10 p-2" href="/">
                <Image
                    src="/logo.png"
                    alt="Virtu Logo"
                    width={100}
                    height={50}
                />
            </Link>
            <Link href="/addTranslation"><button className="text-white p-3 font-bold mx-10  bg-green-600 font-bold">Dodaj Tłumaczenie</button></Link>
        </nav >
    )
}

export default Navbar