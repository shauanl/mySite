import Curve from "../components/layout/Curve";
import Fade from "../components/layout/Fade";
// import LeftoRight from "../components/layout/LeftoRight";
import FlipLetters from "../components/layout/FlipLetters";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import myImg from '../assets/me.png';

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
                <Fade>
                    <div className="img-section max-w-[450px] min-w-[300px] hidden md:block">
                        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-xl">
                            <img src={myImg} alt="a photo of the developer" className="w-full h-auto object-contain rounded-xl" loading="lazy" />
                        </div>
                    </div>
                </Fade>
            </section>
            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Skills></Skills>
            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Fade>
                <div className="max-w-screen-xl mx-auto">
                    <Footer />
                </div>
            </Fade>
            <Curve></Curve>
        </section>
    )
}