import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";

function Home(): JSX.Element {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Contact />
        </div>
    );
}

export default Home;
