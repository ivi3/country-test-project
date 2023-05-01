import {useTheme} from 'next-themes'
import DarkMode from '../assets/icons/dark-mode.svg'
import LightMode from '../assets/icons/light-mode.svg'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <header className="shadow absolute inset-x-0 top-0 z-0 dark:bg-[#2b3743]">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 text-lg">
                <h1 className="md:text-2xl text-lg font-bold"><Link href="/">Where in the world?</Link></h1>
                <button
                    className="pl-4 md:px-4 py-2 rounded-md flex items-center gap-2 md:gap-4 dark:[&_svg]:fill-white"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? <LightMode/> : <DarkMode/>}
                    <span className="hidden sm:inline-block">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
            </div>
        </header>
    )
}


