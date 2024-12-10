import { motion, useScroll } from 'framer-motion';
import Curve from "../components/layout/Curve"
import Fade from "../components/layout/Fade";
import Parallax from "../components/layout/Parallax";
import Footer from "../components/Footer";


export default function Work() {
    const {scrollYProgress } = useScroll();

    return (
        <section className="-mt-1.25 section-work max-w-screen-xl mx-auto">
            <motion.div className="progress-bar fixed top-0 left-0 right-0 h-[10px] bg-green-900 origin-left z-20" style={{ scaleX: scrollYProgress }}></motion.div>
            <Fade>
                <h2 className="text-9xl text-left roboto-bold dpt-5 pl-3 md:pl-8 ">Work</h2>
                <div></div>
                <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
                <span className="block text-xl text-green-900 roboto-bold pl-3 md:pl-10">REACT DEVELOPER WITH SFCC EXPERIENCE</span>
                <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
                <Parallax />
                <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
                <Footer />
            </Fade>


            <Curve></Curve>
        </section>
    )
}
