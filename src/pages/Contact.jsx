import { motion } from 'framer-motion';
import Curve from "../components/layout/Curve"
import Footer from "../components/Footer";


export default function Contact() {

    return (
        <section className="section-contact -mt-1.25 section-work max-w-screen-xl mx-auto">
            <h2 className="text-8xl text-left roboto-bold mb-20">Get in Touch</h2>
            <div className="contact-container flex">
                <div className="contact-info w-1/2 flex-col">
                    <motion.p
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    className="roboto-light mt-10 mb-10">I am available for hire and open to any ideas of cooperation.</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 170 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                    className="mt-10 mb-10">Email: shauanf@gmail.com</motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 170 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                className="contact-form w-1/2">
                    <form className="flex flex-col">
                        <label htmlFor="name" className="text-xl ibm-plex-sans-light">Name</label>
                        <input required type="text" id="name" name="name" className="border border-gray-300 p-2 mb-4 roboto-regular" />
                        <label htmlFor="email" className="text-xl ibm-plex-sans-light">Email</label>
                        <input required type="email" id="email" name="email" className="border border-gray-300 p-2 mb-4 roboto-regular" />
                        <label htmlFor="message" className="text-xl ibm-plex-sans-light">Message</label>
                        <textarea required id="message" name="message" className="border border-gray-300 p-2 mb-4 roboto-regular"></textarea>
                        <button className="roboto-regular bg-black text-white p-2 rounded-md">Send</button>
                    </form>
                </motion.div>
            </div>

            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Footer />
            <Curve>
            </Curve>
        </section>
    )
}