import { motion } from "framer-motion"

import { fadeInUpContainer, fadeInUpItem } from "../../ui/framer_animations"

const ContactContainer = () => {
    return (
        <motion.div
            className="flex flex-col gap-8 text-xl rounded-md"
        >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-title uppercase mb-24 text-center">
                Trabajemos juntos
            </h1>
            <div className="flex flex-col max-w-[800px] mx-auto gap-8 bg-dark p-4">
                <motion.div
                    className="mb-16"
                    variants={fadeInUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 className="text-4xl font-title uppercase mb-8" variants={fadeInUpItem}>Podes escribime acá:</motion.h2>
                    <motion.ul
                        className="flex flex-col gap-4"
                        variants={fadeInUpContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.li variants={fadeInUpItem}><a href="mailto:mncianni@hotmail.com" className="py-4 px-8 bg-primary hover:bg-white hover:text-primary transition-all block rounded-full text-center" target="_blank">mncianni@hotmail.com</a></motion.li>
                        <motion.li variants={fadeInUpItem}><a href="https://wa.me/1137008113" className="py-4 px-8 bg-primary hover:bg-white hover:text-primary transition-all block rounded-full text-center" target="_blank">11 3700 8113</a></motion.li>
                    </motion.ul>
                </motion.div>
                <motion.div
                    variants={fadeInUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeInUpItem} className="text-4xl font-title uppercase mb-8">También podes encontrame en:</motion.h2>
                    <motion.ul className="flex flex-col gap-4 text-center">
                        <motion.li variants={fadeInUpItem}><a href="https://www.linkedin.com/in/mathiascianni/" className="py-4 px-8 bg-primary hover:bg-white hover:text-primary transition-all block rounded-full text-center" target="_blank">Linkedin</a></motion.li>
                        <motion.li variants={fadeInUpItem}><a href="https://github.com/mathiascianni" className="py-4 px-8 bg-primary hover:bg-white hover:text-primary transition-all block rounded-full text-center" target="_blank">Github</a></motion.li>
                        <motion.li variants={fadeInUpItem}><a href="https://www.instagram.com/matnadc/" className="py-4 px-8 bg-primary hover:bg-white hover:text-primary transition-all block rounded-full text-center" target="_blank">Instagram</a></motion.li>
                    </motion.ul>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default ContactContainer