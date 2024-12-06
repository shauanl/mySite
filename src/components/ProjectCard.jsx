import PropTypes from 'prop-types';
import Fade from "../components/layout/Fade";

export default function ProjectCard1({ descriptionOne, descriptionTwo }) {
    return (
        <Fade>
        <div className="pl-4">
            {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-neutral-600">
                {heading}
                <br />

            </h2> */}
            <div className="roboto-light col-span-1 md:col-span-8 ibm-plex-sans-medium mt-2">
                <p className="mb-4 text-xl text-black md:text-2xl">
                    {descriptionOne}
                </p>
                <p className="mb-8 text-xl text-black md:text-2xl">
                    {descriptionTwo}
                </p>
            </div>
        </div>
        </Fade>
    )
}

ProjectCard1.propTypes = {
    heading: PropTypes.string.isRequired,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string
}