import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUpContainer, fadeInUpItem, rocketAnimation } from '../../ui/framer_animations'

const AboutContentSection = () => {


    return (
        <div className="lg:bg-dark lg:p-8 relative">
            <motion.div variants={fadeInUpContainer} whileInView={"visible"} initial="hidden" viewport={{ once: true }} >
                <motion.h2 className="text-4xl md:text-6xl lg:text-8xl mb-16 font-title uppercase" variants={fadeInUpItem}>
                    Desarrollo y diseño creativo
                </motion.h2>
                <motion.p variants={fadeInUpItem} className="font-light text-2xl mb-4" >¡Buenas! Soy <span className="text-orange-500 font-title">Mathias Cianni</span> diseñador y desarrollador frontend con más de un año de experiencia. Me especializo en crear sitios web accesibles y centrados en el usuario, ayudando a que cada proyecto llegue a nuevas alturas. Actualmente, desde <span className="text-orange-500 font-title">Buenos Aires</span>, Argentina, trabajo como freelance, llevando a cabo desarrollos que buscan siempre la mejor experiencia posible. ¿Listo para hacer <span className="text-orange-500 font-title">despegar</span> tu negocio?</motion.p>
                <motion.p variants={fadeInUpItem} className="font-light text-2xl mb-16" >Acá podes ver más <a href="/about" className="text-orange-500 font-medium border-b border-orange-500 font-title hover:text-white hover:border-white transition-all">sobre mi</a></motion.p>
                <motion.p variants={fadeInUpItem} className="font-light text-2xl mb-4" >También me podes <a href="/contact" className="text-orange-500 font-medium border-b border-orange-500 font-title hover:text-white hover:border-white transition-all">contactar</a> o </motion.p>
                <motion.a href="media/Cianni_Mathias_Curriculum.pdf" download="mathias-cianni-cv.pdf" variants={fadeInUpItem} className="bg-primary inline-block px-8 py-4 rounded-sm hover:bg-white hover:text-primary transition-all text-xl">Descargá mi currículum</motion.a>

                {/* TODO: Configurar el rocket */}
                {/* <motion.img variants={rocketAnimation} src="media/rocket.png" alt="" className="hidden lg:block absolute bottom-0 left-0 object-fit max-w-[300px]" /> */}
            </motion.div>
        </div>
    )
}

export default AboutContentSection