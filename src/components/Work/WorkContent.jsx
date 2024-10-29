import WorkMiniCard from "./WorkMiniCard";
import { motion } from "framer-motion";
import { fadeInUpContainer, fadeInUpItem, fadeInRightItem } from "../../ui/framer_animations";

const WorkContent = ({ worksToShow }) => {
    return (
        <motion.div variants={fadeInUpContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
                className="text-7xl font-title uppercase mb-16 text-center"
                variants={fadeInUpItem}
            >
                Una vista rápida de mis proyectos
            </motion.h2>
            <motion.div
                className="grid grid-cols-3 gap-12 mb-12"
                variants={fadeInUpContainer}
            >
                {worksToShow.map((work, i) => <motion.div key={i} variants={fadeInRightItem}><WorkMiniCard work={work} /></motion.div>)}
            </motion.div>
            <motion.a
                variants={fadeInUpItem}
                href="/projects"
                className="border block border-primary text-xl py-4 px-8 max-w-max text-center mx-auto hover:bg-white hover:border-white hover:text-primary transition-all rounded-sm"
            >
                Mostrar todos los proyectos
            </motion.a>
        </motion.div>
    )
}

export default WorkContent