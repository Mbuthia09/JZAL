import React from "react";
import { Link } from "react-router-dom";
import { BiLogoReact } from "react-icons/bi"; // make sure this is installed

const Navbar = () => {
  return (
    <nav
      className="bg-slate-800 shadow-lg flex items-center 
                  justify-around py-3 px-32 fixed
                  top-0 left-0 w-full"
    >
      <Link to={"/"}>
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl" />
          <span className="font-semibold text-2xl">JZAL</span>
        </span>
      </Link>

      <div className="flex items-center gap-6 text-black">
        <Link
          to="/"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          About us
        </Link>

        <Link
          to="/services"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Our Services
        </Link>

        <Link
          to="/case-studies"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Case Studies
        </Link>

        <Link
          to="/publications"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Publications
        </Link>

        <Link
          to="/certifications"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Certifications
        </Link>

        <Link
          to="/trainings"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300
                              rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Trainings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
