import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function FlipLetters({ children }) {
    // const totalLetters = children.length;

    return (
        <>
            {/* {children.split("").map((char, index) => {
                return (
                    <motion.span
                        className='inline-block roboto-bold text-6xl'
                        key={char + "-" + index}
                        initial={{
                            opacity: 0,
                            x: "0%"
                        }}
                        animate={{
                            opacity: 1,
                            x: "100%"
                        }}
                        transition={{
                            duration: 0.7 / totalLetters,
                            delay: 0.5 + (index * 0.7) / totalLetters,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })} */}

            <motion.div
            initial={{
                opacity: 0,
                y: "100%"
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut",
            }}
            className="roboto-bold text-6xl">
                {children}
            </motion.div>
        </>
    )
}

FlipLetters.propTypes = {
    children: PropTypes.node.isRequired,
};



