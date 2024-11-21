import { useState, useEffect } from 'react';
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

export default function Curve({ children }) {

    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const SVG = ({ width, height }) => {
        const initialPath = `
        M0 300
        Q${width / 2} 200 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
        `;

        const targetPath = `
        M0 300
        Q${width / 2} 200 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
        `;

        const curve = {
            initial: {
                d: initialPath
            },
            enter: {
                d: targetPath,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.76, 0, 0.24, 1]
                }
            },
            exit: {
                d: initialPath,
                transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1]
                }
            }
        };

        const slide = {
            initial: {
                top: '-300px'
            },
            enter: {
                top: '-100vh',
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.76, 0, 0.24, 1]
                },
                transitionEnd: {
                    top: '100vh'
                }
            },
            exit: {
                top: '-300px',
                transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1]
                }
            }
        };

        return (
            <motion.svg key={`${width}-${height}`} {...anim(slide)}>
                <motion.path {...anim(curve)}></motion.path>
            </motion.svg>
        );
    };

    const text = {
        initial:{
            opacity: 1
        },
        enter : {
            opacity: 0,
            top: -100,
            transition: {
                duration: 0.5,
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1]
            },
            transitionEnd: {
                top: "47.5%"
            }
        },
        exit: {
            opacity: 1,
            top: "40%",
            transition: {
                duration: 0.5,
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <div key={location.pathname}  className='page curve'>
            <motion.div {...anim(text)} className="current-page">
                <h1 className="text-3xl font-bold">{location.pathname === '/' ? 'Bio' : location.pathname.slice(1, 2).toUpperCase() + location.pathname.slice(2)}</h1>
            </motion.div>
            <div style={{ opacity: dimensions.width > 0 ? 0 : 1 }} className="bg-cover"></div>
            {dimensions.width > 0 && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

Curve.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};