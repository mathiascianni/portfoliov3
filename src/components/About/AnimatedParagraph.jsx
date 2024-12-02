import { motion } from "framer-motion"
import { formatDescription } from "../../ui/textFormatter"
import { fadeInUpItem } from "../../ui/framer_animations"

const AnimatedParagraph = ({ text }) => {
    const formattedText = formatDescription(text)
    
    const handleClick = (content) => {
        
    };

    // TODO: Hacer animaciones onclick para los links

    return (
        <motion.p variants={fadeInUpItem}>
            {formattedText.map((part, i) => (
                <>
                    {part.highlighted && (
                        <span className="text-orange-500">
                            {part.text}
                        </span>
                    )}
                    {!part.highlighted && (
                        <>
                            {part.text}
                        </>
                    )}
                </>
            ))}
        </motion.p>
    )
}

export default AnimatedParagraph