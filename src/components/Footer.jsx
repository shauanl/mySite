import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <>
            <motion.div whileHover={{scale: 1.1}} className="text-4xl">Let's get to know each other.</motion.div>
            <div className="text-2xl text-gray-400 mb-8">Get in touch.</div>
        </>
    )
}