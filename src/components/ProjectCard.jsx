import { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView }   from 'framer-motion';

export default function ProjectCard1({ descriptionOne, descriptionTwo, ident }) {
    let isEven = ident % 2 === 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const alignmentClass = isEven ? 'pl-5' : 'pr-5';
    // Animation styles based on alignment
    const animationStyles = {
        transform: isInView
            ? "none"
            : isEven
                ? "translateX(200px)" // Slide in from the right for even
                : "translateX(-200px)", // Slide in from the left for odd
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    };

    return (
        <motion.div ref={ref} className={alignmentClass} style={animationStyles}>
            <div className="roboto-regular col-span-1 md:col-span-8 ibm-plex-sans-medium mt-2 text-lg leading-7">
                <p className="mb-4">
                    {descriptionOne}
                </p>
                <p>
                    {descriptionTwo}
                </p>
            </div>
        </motion.div>
    )
}

ProjectCard1.propTypes = {
    heading: PropTypes.string.isRequired,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string,
    ident: PropTypes.number.isRequired
}