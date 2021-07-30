import logo from "../../assets/img/logo.png";
import React from "react";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer(): JSX.Element {
    return (
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <div className="block p-0.5 rounded-full bg-gray-500">
                            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
                        </div>
                        <span className="ml-3 text-xl">
                            Yohann THEPAUT
                        </span>
                    </a>

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                        Page web <a href="https://github.com/ythepaut/webpage" className="text-gray-600 transition hover:text-gray-800" target="_blank">open-source</a> et sous licence <a href="https://github.com/ythepaut/webpage/blob/master/LICENSE" rel="noopener noreferrer" className="text-gray-600 transition hover:text-gray-800" target="_blank">GNU GPL v.3.0</a>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xl space-x-3">
                        <a className="text-gray-500 transition hover:text-gray-800" target="_blank" href="https://github.com/ythepaut">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="text-gray-500 transition hover:text-gray-800" target="_blank" href="https://www.linkedin.com/in/yohann-thepaut-340037150/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
