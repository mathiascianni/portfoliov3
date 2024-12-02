import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 200; // Ajusta este valor según cuando quieras que aparezca el botón
            if (scrollPosition > threshold) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Hace que el scroll sea suave
        });
    };


    return (
        <button onClick={scrollToTop} className={`fixed bottom-16 z-40 rotate-90 transition-all hover:cursor-pointer border border-darkAccent hover:bg-orange-500 hover:border-orange-500 px-4 py-2 rounded-full ${showButton ? 'right-8' : '-right-[100px]'}`}>&larr; Top</button>
    )
}

export default BackToTop