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

export default function LefttoRight({children}) {
    const animation = {
        initial: {
            x:-200,
            opacity: 0
        },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.5,
                ease: "easeIn",
            },
        }
    }

    return (
        <motion.div {...anim(animation)}>
            {children}
        </motion.div>
    )
}

LefttoRight.propTypes = {
    children: PropTypes.node.isRequired,
};