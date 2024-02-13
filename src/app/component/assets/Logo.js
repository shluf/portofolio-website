import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
    return (
            <div className="fixed flex flex-row py-5 px-6 font-bold z-[55]">
                <Link href='/' className={'flex flex-row items-center'}>
                    <Image alt="Initial Logo" src={'/logo.png'} width={32} height={32} className={'drop-shadow-[0_1000px_0_#001b34] -translate-y-[1000px]'}></Image>
                    hluf
                </Link>
            </div>
    )
}

export default Logo