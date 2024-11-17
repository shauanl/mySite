import { useLocation } from "react-router-dom";

export default function Home() {

    const location = useLocation();

    return (
        <>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem perspiciatis aut voluptatum explicabo eius doloribus quibusdam tempore corrupti tempora? Soluta repudiandae hic, provident repellat officiis ex aperiam praesentium dolorem fugiat.</p>
            <h2>Pathname: {location.pathname === "/" ? 'home' : '/'}</h2>
        </>
    )
}