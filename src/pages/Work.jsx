import Curve from "../components/layout/Curve"
import Fade from "../components/layout/Fade";
import Parallax from "../components/layout/Parallax";
import Footer from "../components/Footer";

export default function Work() {
    return (
        <section className="-mt-1.25 section-work max-w-screen-xl mx-auto">
            <Fade>
                <h2 className="text-9xl text-left roboto dpt-5 pl-3 md:pl-8 ">Work</h2>
                <div></div>
                <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
                <span className="block text-xl text-green-900 roboto-bold pl-3 md:pl-10">REACT DEVELOPER WITH SFCC EXPERIENCE</span>
                <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Parallax />
            <Footer />
            </Fade>


            <Curve></Curve>
        </section>
    )
}
