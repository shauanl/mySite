import Curve from "../components/layout/Curve"
import Footer from "../components/Footer";

export default function Contact() {

    return (
        <section className="section-contact -mt-1.25 section-work max-w-screen-xl mx-auto">
            <h2 className="text-8xl text-left roboto-bold mb-20">Contact me</h2>
            <div className="contact-container flex">
                <div className="contact-info w-1/2 flex-col">
                    <p className="mt-10 block text-3xl">Get in Touch</p>
                    <p className="roboto-light mt-10 mb-10">I am available for hire and open to any ideas of cooperation.</p>
                    <p className="mt-10 mb-10">Email: shauanf@gmail.com</p>
                    <p>Let's create seamless digital experiences—reach out </p>
                </div>
                <div className="contact-form w-1/2">

                </div>
            </div>

            <hr className="border-t border-gray-300 my-8 max-w-screen-xl mx-auto" />
            <Footer />
            <Curve>
            </Curve>
        </section>
    )
}