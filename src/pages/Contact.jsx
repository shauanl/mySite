import { motion } from 'framer-motion';
import Curve from "../components/layout/Curve"
import Footer from "../components/Footer";

const animation = (yOffset, duration) => ({
    initial: { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration }
})


export default function Contact() {

    return (
        <section className="section-contact -mt-1.25 section-work max-w-screen-xl mx-auto">
            <h2 className="text-8xl text-left roboto-bold mb-10 md:mb-20 px-5 md:px-0">Get in Touch</h2>
            <div className="contact-container flex flex-col md:flex-row px-5 md:px-0">
                <div className="contact-info w-full m:w-1/2 flex-col">
                    <motion.p
                        {...animation(150, 1)}
                    className="roboto-light my-3 md:my-10">I am available for hire and open to any ideas of cooperation.</motion.p>
                    <motion.p
                        {...animation(160, 1.1)}
                        className="mt-10 mb-10 text-xl ibm-plex-sans-medium">Email: shauanf@gmail.com</motion.p>
                </div>
                <motion.div
                    {...animation(170, 1.2)}
                className="contact-form w-full md:w-1/2">
                    <form className="flex flex-col">
                        <motion.label {...animation(160, 1)} htmlFor="name" className="text-xl ibm-plex-sans-light">Name</motion.label>
                        <motion.input {...animation(150, 1.2)} required type="text" id="name" name="name" className="border border-gray-300 p-2 mb-4 roboto-regular" />
                        <motion.label {...animation(160, 1.3)} htmlFor="email" className="text-xl ibm-plex-sans-light">Email</motion.label>
                        <motion.input {...animation(160, 1.4)} required type="email" id="email" name="email" className="border border-gray-300 p-2 mb-4 roboto-regular" />
                        <motion.label {...animation(160, 1.6)} htmlFor="message" className="text-xl ibm-plex-sans-light">Message</motion.label>
                        <motion.textarea {...animation(160, 1.7)} required id="message" name="message" className="border border-gray-300 p-2 mb-4 roboto-regular"></motion.textarea>
                        <motion.button {...animation(160, 1.8)}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                            }}
                        className="roboto-regular bg-black text-white p-2 rounded-md">
                            Send
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <div className="px-5 md:px-0">
                <Footer />
            </div>
            <Curve>
            </Curve>
        </section>
    )
}