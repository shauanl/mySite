import { motion } from "framer-motion";

const skillIcons = {
    HTML: "../../../src/assets/html.svg",
    CSS: "../../../src/assets/css.svg",
    JavaScript: "../../../src/assets/js.svg",
    React: "../../../src/assets/react.svg",
    "Node.js": "../../../src/assets/node.svg",
    Typescript: "../../../src/assets/ts.svg",
    jQuery: "../../../src/assets/jquery.svg",
    Sass: "../../../src/assets/sass.svg",
    Tailwind: "../../../src/assets/tailwind.svg",
    chakraUI: "../../../src/assets/chackraui.png",
    Agile: "../../../src/assets/agile.svg",
    Bitbucket: "../../../src/assets/bitbucket.svg",
    "WCAG compliance": "../../../src/assets/wcag.svg",
    Github: "../../../src/assets/github.svg",
    SEO: "../../../src/assets/seo.svg",
    "Responsive Design": "../../../src/assets/responsive.svg",
    "Salesforce Commerce Cloud": "../../../src/assets/sfcc.svg",
    Debugging: "../../../src/assets/debugging.png",
    Figma: "../../../src/assets/figma.svg",
};

const skills = [
    ["HTML", "CSS", "JavaScript", "React"],
    ["Node.js", "Typescript", "jQuery", "Figma"],
    ["Tailwind", "chakraUI", "Sass"],
    ["Bitbucket", "WCAG compliance", "SEO"],
    ["Github", "Responsive Design", "Debugging"],
    ["Salesforce Commerce Cloud"],
];

export default function Skills() {
    return (
        <section className="Skills max-w-screen-xl mx-auto mb-10">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 80 }} // Start offscreen
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                className="mb-10 font-bold text-3xl">Skills</motion.h2>
                <div className="space-y-6">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            className="flex justify-center gap-12"
                            initial={{ opacity: 0, y: 50 }} // Start offscreen and invisible
                            whileInView={{ opacity: 1, y: 0 }} // Animate into view
                            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the row is visible
                            transition={{
                                duration: 1, // Animation duration
                                delay: groupIndex * 0.2, // Stagger animation for rows
                                ease: "easeOut",
                            }}
                        >
                            {skillGroup.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex items-center space-x-4"
                                >
                                    {/* Icon or Placeholder */}
                                    <div
                                        className="w-8 h-8 flex-shrink-0 flex justify-center items-center"
                                    >
                                        {skillIcons[skill] && (
                                            <img
                                                src={skillIcons[skill]}
                                                alt={`${skill} icon`}
                                                className="w-full h-full object-contain"
                                            />
                                        )}
                                    </div>

                                    {/* Skill Text */}
                                    <div className="ibm-plex-sans-medium text-2xl">
                                        {skill}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
