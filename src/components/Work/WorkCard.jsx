import { motion } from "framer-motion"
import { fadeInUpItem, fadeInUpContainer } from "../../ui/framer_animations"
import { formatDescription } from "../../ui/textFormatter"

const WorkCard = ({ work, i }) => {
    const formattedDescription = formatDescription(work.description)
    const workIcons = ["monitor-chart.svg", "handbag.svg", "paper.svg"]
    return (
        <motion.a
            key={i}
            href={work.slug}
            className={`flex w-full group gap-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            variants={fadeInUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                variants={fadeInUpItem}
                className=""
            >
                <div className="w-full h-full overflow-hidden relative group-hover:scale-[102%] duration-500 transition-all rounded-md">
                    <img
                        src={work.miniature}
                        alt={work.title}
                        class="max-w-[1024px] rounded-md "

                    />
                    <div className="w-[50%] h-[200%] absolute -top-[100%] -left-[50%] rotate-45 bg-gradient-to-r from-white/30 to-transparent group-hover:left-0 group-hover:-top-[85%] transition-all rounded-md duration-500"></div>
                </div>
            </motion.div>
            <motion.div
                class="flex flex-col gap-8 w-full items-start justify-center bg-dark border border-darkAccent rounded-md relative overflow-hidden px-4 py-1 "
                variants={fadeInUpContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <motion.div className="z-10 flex flex-col gap-8 p-8"  variants={fadeInUpItem}>
                    <motion.h3
                        class="text-5xl"
                        variants={fadeInUpItem}
                    >
                        {work.title}
                    </motion.h3>
                    <motion.p
                        class="text-xl font-light line-clamp-6"
                        variants={fadeInUpItem}
                    >
                        {formattedDescription.map((desc, index) => <span key={index}>{desc.text}</span>)}
                    </motion.p>
                    <motion.button
                        class="border border-primary py-2 px-8 group-hover:bg-white group-hover:border-white group-hover:text-primary transition-all rounded-sm"
                        variants={fadeInUpItem}
                    >
                        Ver proyecto
                    </motion.button>
                </motion.div>
                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-full w-full overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                <span className="backdrop absolute inset-[1px] bg-dark rounded-md  transition-colors duration-200" />
            </motion.div>
        </motion.a>
    )
}

export default WorkCard