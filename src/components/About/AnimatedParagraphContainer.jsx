import { motion } from "framer-motion"
import AnimatedParagraph from "./AnimatedParagraph"
import { fadeInUpContainer } from "../../ui/framer_animations"

const AnimatedParagraphContainer = () => {
    const texts = [
        "¡Hola! Soy **Mathias Cianni**, desarrollador frontend con la misión de crear experiencias digitales fuera de este mundo. Me especializo en tecnologías como **React y Astro** para construir interfaces que combinan estética y funcionalidad.",
        "Con estudios en desarrollo web en Escuela da Vinci y alrededor de un año de experiencia en proyectos variados, estoy en constante exploración para mejorar mis habilidades y encontrar nuevas soluciones que lleven tus ideas a otro nivel.",
        "Por fuera del desarrollo, me gustan los tópicos de ciencia y tecnología, especialmente aquellos relacionados con la **inteligencia artificial** y cómo esta área impactan el futuro. Me llama mucho la atención como la tecnología evoluciona a pasos agigantados y las posibilidades de que podemos hacer con ella.",
        "En lo personal, me considero una persona tranquila, compañera y siempre dispuesta a dar una mano cuando alguien lo necesita. Creo que el trabajo en equipo y la empatía son fundamentales, tanto en lo profesional como en la vida diaria. Siempre busco generar un ambiente positivo y colaborar para que las cosas salgan de la mejor manera posible."
    ]

    return (
        <motion.div
            className="flex flex-col gap-8 text-xl rounded-md"
        >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-title uppercase mb-12 lg:mb-24">
                ¿Quién está detrás del código?
            </h1>
            <div className="flex flex-col-reverse items-center xl:flex-row gap-16">

                <motion.div
                    className="flex flex-col gap-4 flex-1 bg-dark p-4"
                    variants={fadeInUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    
                >
                    {texts.map((text, index) => (
                        <AnimatedParagraph key={index} text={text} />
                    ))}
                </motion.div>
                <div>
                    <img src="media/mathias-photo.jpeg" alt="" className="rounded-xl w-full max-w-[500px] lg:max-w-[430px] aspect-square" />
                </div>
            </div>

        </motion.div>
    )
}

export default AnimatedParagraphContainer