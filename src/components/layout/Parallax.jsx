import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';


export default function Parallax({ children }) {
    return (
        <div className="section-parallax">
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1731902062633-1496d7bcf95c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="subheading"
                heading="heading"
            >
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1732192548673-e08daf9595cc?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="subheading"
                heading="heading"
            ></TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1732321221818-3bb8fdd9052d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="subheading"
                heading="heading"
            ></TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1731432247084-926d73272e63?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                subheading="subheading"
                heading="heading"
            ></TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://images.unsplash.com/photo-1730758405638-ab8659278e96?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D1"
                subheading="subheading"
                heading="heading"
            ></TextParallaxContent>
            {children}
        </div>
    )
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children}) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
            className="">
            <div className="relative h-[100vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    )
}

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
        ref={targetRef}
        style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundAttachment: 'fixed',
            height: `calc(100vh - ${IMG_PADDING * 2}px)`,
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
    )
}

const OverlayCopy = ({heading, subheading}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            ref={targetRef}
            style={{
                y,
                opacity
            }}
            className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
        >
            <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>{subheading}</p>
            <p className='text-center text-4xl font-bold md:text-7xl'>{heading}</p>
        </motion.div>
    )
}

const ExampleContent = () => {
    return(
        <div className="mxauto grid max-w-6xl grid-cold-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                Content Explaining the project above
            </h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-netraul-600 md:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi, fugit fugiat quas exercitationem magni perspiciatis odit ullam cumque distinctio beatae consectetur saepe eaque recusandae incidunt soluta. Alias, quidem veritatis!
                </p>
                <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse voluptas, molestiae natus iusto quae corrupti deserunt, impedit accusantium officiis tempora fugiat ipsa fuga cumque illo placeat dignissimos cum. Officia!
                </p>
            </div>
        </div>
    )
}

Parallax.propTypes = {
    children: PropTypes.node,
}
StickyImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
}
TextParallaxContent.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    heading: PropTypes.string,
    children: PropTypes.node,
}
OverlayCopy.propTypes = {
    subheading: PropTypes.string,
    heading: PropTypes.string,
}

