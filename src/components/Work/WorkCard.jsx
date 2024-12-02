import { motion } from "framer-motion"
import { fadeInUpItem, fadeInUpContainer, fadeInRightItem } from "../../ui/framer_animations"
import { formatDescription } from "../../ui/textFormatter"

const WorkCard = ({ work, i }) => {
    const formattedDescription = formatDescription(work.description)
    const workIcons = ["monitor-chart.svg", "handbag.svg", "paper.svg"]
    return (
        <div>
            <a
                href={work.slug}
                className={`flex flex-col w-full group gap-4 lg:gap-12 ${i % 2 === 0 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
                <div
                    className=""
                >
                    <div className="w-full h-full overflow-hidden relative group-hover:scale-[102%] duration-500 transition-all rounded-md">
                        <img
                            src={work.miniature}
                            alt={work.title}
                            className="lg:max-w-[500px] h-full object-cover 2xl:max-w-[900px] rounded-md "

                        />
                        <div className="w-[50%] h-[200%] absolute -top-[100%] -left-[50%] rotate-45 bg-gradient-to-r from-white/30 to-transparent group-hover:left-0 group-hover:-top-[85%] transition-all rounded-md duration-500"></div>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-8 w-full items-start justify-center bg-dark border border-darkAccent rounded-md relative overflow-hidden px-4 py-1 "
                >

                    <div className="z-10 flex flex-col gap-8 p-8">
                        <h3
                            className="text-5xl"
                            style={{viewTransitionName: `${work.slug}-title`}}
                        >
                            {work.title}
                        </h3>
                        <p
                            className="text-xl font-light line-clamp-6"
                            style={{viewTransitionName: `${work.slug}-desc`}}
                        >
                            {formattedDescription.map((desc, index) => <span key={index}>{desc.text}</span>)}
                        </p>
                        <button
                            className="border border-primary py-2 px-8 group-hover:bg-white group-hover:border-white group-hover:text-primary transition-all rounded-sm"
                        >
                            Ver proyecto
                        </button>
                    </div>
                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-full w-full overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                    <span className="backdrop absolute inset-[1px] bg-dark rounded-md  transition-colors duration-200" />
                </div>
            </a>
        </div>
    )
}

export default WorkCard