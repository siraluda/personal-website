import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      id="desktop-nav"
      className="flex flex-row items-center justify-around h-[17vh] relative"
    >
      <div className="font-extrabold text-lg">Abdul-Waris</div>
      <div className="max-md:hidden">
        <ul className="flex flex-row gap-10">
          <li>About Me</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="min-md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 p-4 space-y-2 absolute right-15 top-24">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About Me
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Experience
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
