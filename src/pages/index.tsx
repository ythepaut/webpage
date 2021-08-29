import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";

function HomePage(): JSX.Element {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default HomePage;
