import { useState, useEffect } from "react"
import { navLinks } from "../../ui/navbar"

const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);

    // Provisional
    const [language, setLanguage] = useState("es")

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])

    return (
        <nav className={`fixed z-[999] flex items-center px-desk py-4 w-full transition-all duration-500 ${isShow ? "top-0" : "-top-[150px]"} bg-primary  text-white`}>
            <a href="/"><img src="matna-logo.svg" alt="" className="max-w-8" /></a>
            <ul className="flex gap-12 justify-center flex-1 w-full">
                {
                    navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="block hover:bg-white hover:text-primary transition-all duration-500 py-1 px-2 rounded-md hover">{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            
            <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="flex items-center gap-2"><img src={language === "es" ? "icons/uk-flag.png" : "icons/spa-flag.png"} alt={language } /> {language === "es" ? "English" : "Español"}</button>
        </nav>
    )
}

export default Navbar