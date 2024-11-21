import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../../curve.css';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Fade({children}) {

    const animationUp = {
        initial: { opacity: 0, y: 20 },
        enter: {
            opacity: 1,
            y: 0,
            scale: 1.05,
            transition: {
                duration: 0.5,
                delay: 0.7,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.5 },
        },
    };
    return (
        <motion.div {...anim(animationUp)}>
            {children}
        </motion.div>
    )
}

Fade.propTypes = {
    children: PropTypes.node.isRequired,
};