import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import ProjectCards from '../ProjectCard';
import projects from '../projectsData'
export default function Parallax({ children }) {
    return (
        <div className="section-parallax grid grid-cols-1">
            {projects.map((project, index) => {
                return (
                    <TextParallaxContent
                        key={index}
                        imgUrl={project.imgUrl}
                        heading={project.heading}
                        subheading={project.subheading}
                        ident={index}
                    >
                        <ProjectCards
                            heading={project.heading}
                            descriptionOne={project.descriptionOne}
                            descriptionTwo={project.descriptionTwo}
                        />
                    </TextParallaxContent>
                )
            })}
            {children}
        </div>
    )
}

const IMG_PADDING = 12;
const TextParallaxContent = ({ imgUrl, heading, children, ident, subheading }) => {
    let isEven = ident % 2 === 0
    ident = ident + 1;
    return (
        <>
            <div className={`ibm-plex-sans-medium text-xl border-black uppercase w-full  ${isEven ? 'text-right pr-3 md:pr-9' : 'text-left pl-3 md:pl-7'}`}>
                {heading}
                <span className="ibm-plex-sans-medium text-xs ml-3 block text-gray-400 inline-block mb-3">{subheading}</span>
            </div>
            <div
                style={{
                    paddingLeft: IMG_PADDING,
                    paddingRight: IMG_PADDING,
                }}
                className={`flex flex-wrap ${isEven ? 'flex-row-reverse' : ''}`}>
                <div className="relative h-[50vh] w-1/2">
                    <StickyImage imgUrl={imgUrl} />
                    {/* // Removed the OverlayCopy component for future implementation  */}
                    {/* <OverlayCopy heading={heading} subheading={subheading} /> */}
                </div>
                <div className='pt-2 w-1/2 flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </>
    )
}

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <motion.div
            ref={targetRef}
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
                height: `calc(50vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            className="sticky z-0 overflow-hidden rounded-3xl">
                <motion.div
                    style={{
                        opacity,
                    }}
                    className="absolute inset-0 bg-neutral-950/70">
                </motion.div>
            </motion.div>
        </>
    )
}

// Removed the OverlayCopy component for future implementation
// const OverlayCopy = ({heading, subheading}) => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ["start end", "end start"]
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [100, -150]);
//     const opacity = useTransform(scrollYProgress, [0, 0.4, 0.60], [0, 1, 0]);

//     return (
//         <motion.div
//             ref={targetRef}
//             style={{
//                 y,
//                 opacity
//             }}
//             className='absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center text-white'
//         >
//             <p className='mb-2 text-xl md:mb-4 md:text-3xl'>{subheading}</p>
//             <p className='text-4xl font-bold md:text-7xl'>{heading}</p>
//         </motion.div>
//     )
// }


Parallax.propTypes = {
    children: PropTypes.node,
}
StickyImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    project: PropTypes.string,
}
TextParallaxContent.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    heading: PropTypes.string,
    children: PropTypes.node,
    ident: PropTypes.number,
}

// Removed the OverlayCopy component for future implementation
// OverlayCopy.propTypes = {
//     subheading: PropTypes.string,
//     heading: PropTypes.string,
// }

