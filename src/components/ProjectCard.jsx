import PropTypes from 'prop-types';


export default function ProjectCard1({subheading, descriptionOne, descriptionTwo }) {
    return (
        <>
            <span className="text-sm text-black ml-10">{subheading}</span>
            <div className="mx-auto max-w-8xl grid-cold-1 gap-8 px-8 pb-24 pt-5 pl-10 pr-5 md:grid-cols-12">
                {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-neutral-600">
                    {heading}
                    <br />

                </h2> */}
                <div className="col-span-1 md:col-span-8 ibm-plex-sans-medium">
                    <p className="mb-4 text-xl text-black md:text-2xl">
                        {descriptionOne}
                    </p>
                    <p className="mb-8 text-xl text-black md:text-2xl">
                        {descriptionTwo}
                    </p>
                </div>
            </div>
        </>
    )
}

ProjectCard1.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    descriptionOne: PropTypes.string,
    descriptionTwo: PropTypes.string
}