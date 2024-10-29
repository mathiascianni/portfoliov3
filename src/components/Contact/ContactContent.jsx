import { motion } from "framer-motion"
import { fadeInUpContainer, fadeInUpItem } from "../../ui/framer_animations"

const ContactContent = () => {
    return (
        <motion.div
            variants={fadeInUpContainer}
            initial="hidden"
            whileInView="visible"
            class="text-8xl flex flex-col items-center mb-16 gap-4"
        >
            <motion.p
                variants={fadeInUpItem}
                class="mb-4 font-title uppercase text-center">
                Ya que llegaste hasta acá
            </motion.p>
            <motion.p
                variants={fadeInUpItem}
                class="mb-16 font-title uppercase text-center">
                ¡Hagamos algo juntos!
            </motion.p>
            <motion.a
                variants={fadeInUpItem}
                href="/contact"
                class="mb-16 font-title uppercase text-center bg-orange-500 text-white px-8 py-4 rounded-sm hover:bg-white hover:text-orange-500 transition-all inline-flex items-center gap-4 group"
            >
                Contactame <svg className="fill-current h-20 w-20 group-hover:text-orange-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" width="24" height="24" viewBox="0 0 24 24" ><g clip-path="url(#a)"><path fill-rule="evenodd" d="M20.265.168a2.777 2.777 0 0 1 3.56 3.559L17.698 22.09a2.776 2.776 0 0 1-2.002 1.833 2.743 2.743 0 0 1-2.606-.744l-3.288-3.273-3.452 1.787a.856.856 0 0 1-1.252-.784l.143-5.458 12.077-8.772a1.072 1.072 0 0 0-1.26-1.735L3.777 13.865.81 10.9a2.743 2.743 0 0 1-.75-2.48 2.777 2.777 0 0 1 1.833-2.122H1.9L20.263.167l.002.001Z" clip-rule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" /></clipPath></defs></svg>
            </motion.a>
        </motion.div>

    )
}

export default ContactContent