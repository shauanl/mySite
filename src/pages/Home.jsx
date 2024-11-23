import Curve from "../components/layout/Curve";
import Fade from "../components/layout/Fade";
// import LeftoRight from "../components/layout/LeftoRight";
import FlipLetters from "../components/layout/FlipLetters";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import MeMyself from "../components/layout/MeMyself";


export default function Bio() {

    return (
        <section className="home-intro -mt-1.25">
            <section className="relative flex items-center justify-between gap-4 pt-5 max-w-screen-xl mx-auto">
                <Fade>
                    <div className="intro flex flex-col leading-none">
                        <div className="ibm-plex-sans-medium max-w-[1100px] text-justify leading-normal text-3xl">
                            Sr. Software Engineer with 8 years of experience building and optimizing robust eCommerce storefronts. Certified Salesforce B2C Commerce Developer skilled in SFRA, headless architecture, React.js, and API integration. <span className="text-green-700 font-bold">Expertise in delivering high-quality digital solutions</span> through custom components and modern front-end technologies in fast-paced, deadline-driven environments.
                        </div>
                        {/* <p className="ibm-plex-sans-regular"> Designing Precision Interfaces Informed by Real User Behavior</p> */}
                    </div>
                </Fade>
            </section>
            <section className="home-present relative flex items-center justify-between gap-4 mt-8 max-w-screen-xl mx-auto">
                <FlipLetters>
                    Shauan Ferreira Leite
                </FlipLetters>
                {/* <FlipLetters>Sr.Software Engineer </FlipLetters> */}
                <MeMyself />
            </section>
            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Skills></Skills>
            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <div className="max-w-screen-xl mx-auto">
                <Footer />
            </div>
            <Curve></Curve>
        </section>
    )
}