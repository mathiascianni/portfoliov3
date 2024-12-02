import { useState, useEffect } from "react"
import { navLinks } from "../../ui/navbar"

const Navbar = () => {
    const [isShow, setIsShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Provisional
    const [language, setLanguage] = useState("es")

    const handleScroll = () => {
        if (isMenuOpen) {
            setIsShow(true);
            return;
        };

        if (window.scrollY > lastScrollY) {
            setIsShow(false)
        } else {
            setIsShow(true)
        }
        setLastScrollY(window.scrollY)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])

    return (
        <nav className={`fixed inline-flex items-center justify-between py-4 w-full px-4 lg:px-[100px] xl:px-desk left-1/2 -translate-x-1/2 transition-all duration-500 ${isShow ? "top-0" : "-top-[150px]"} bg-primary z-50`}>
            <a href="/"><img src="matna-logo.svg" alt="" className="max-w-8" /></a>
            <ul className="hidden lg:flex gap-12 justify-center">
                {
                    navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="block hover:bg-white hover:text-primary transition-all duration-500 py-1 px-2 rounded-md hover">{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            <button className="lg:hidden flex"><span className="sr-only">Abrir menú</span><img src="icons/menu.svg" alt="" onClick={toggleMenu} /></button>
            <div className={`lg:hidden right-0 top-0 flex w-full h-screen flex-col items-center justify-center fixed bg-primary transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="absolute top-4 right-4"><span className="sr-only">Cerrar menú</span><img src="icons/close.svg" alt="" onClick={toggleMenu} /></button>
                <ul className=" text-center text-2xl  gap-12 justify-center">

                    {
                        navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={toggleMenu} className="block hover:bg-white hover:text-primary transition-all duration-500 p-4 hover">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="flex items-center gap-2"><img src={language === "es" ? "icons/uk-flag.png" : "icons/spa-flag.png"} alt={language } /> {language === "es" ? "English" : "Español"}</button> */}
        </nav>
    )
}

export default Navbar