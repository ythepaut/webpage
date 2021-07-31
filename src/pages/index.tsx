import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";

function HomePage(): JSX.Element {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Contact />
        </div>
    );
}

export default HomePage;
