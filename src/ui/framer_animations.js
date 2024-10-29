const fadeInUpContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const fadeInUpItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.8,
            stiffness: 150,
            mass: 1.5,
            duration: 0.5
        }
    },
}

const fadeInRightItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.8,
            stiffness: 150,
            mass: 1.5,
            duration: 0.5
        }
    },
}

const rocketAnimation = {
    hidden: {
        opacity: 0,
        x: 600,
        y: 100,
        rotate: 47,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 1,
        },
        x: 700,
        y: 0
    }
}

export {
    fadeInUpContainer,
    fadeInUpItem,
    rocketAnimation,
    fadeInRightItem
}