import Curve from "../components/layout/Curve"


export default function Work() {
    return (
        <section className="-mt-1.25">
            <section className="relative flex items-center justify-between gap-4 pt-5 max-w-screen-xl mx-auto">
                <div className="intro flex flex-col leading-none">
                    <p className="ibm-plex-sans-medium text-lg ml-1">Sr.Software Engineer</p>
                    <h2 className="roboto-bold text-7xl">Shauan Ferreira Leite</h2>
                    {/* <div className="ibm-plex-sans-plan max-w-[500px] text-justify leading-normal text-lg">
                        Front-End Developer with 7+ years of experience building and optimizing robust eCommerce storefronts. Certified Salesforce B2C Commerce Developer skilled in SFRA, headless architecture, React.js, and API integration. Expertise in delivering high-quality digital solutions through custom components and modern front-end technologies in fast-paced, deadline-driven environments.
                    </div> */}
                    {/* <p className="ibm-plex-sans-regular"> Designing Precision Interfaces Informed by Real User Behavior</p> */}
                </div>
                {/* image area */}
                {/* <div className="img-section max-w-[450px] min-w-[300px] hidden md:block">
                    <img src={myImg} alt={myImg} className="w-full h-auto object-contain rounded-xl" />
                </div> */}
            </section>
            <section className="max-w-screen-xl mx-auto">

            </section>
            <Curve></Curve>
        </section>
    )
}