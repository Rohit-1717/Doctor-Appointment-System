import React from "react";
import { assets } from "../assets/assets";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side  */}

      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-3xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Schedule an Appointment with <br /> Experienced Healthcare
          Professionals.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-32" src={assets.group_people} alt="Group People" />
          <p>
            Browse our network of trusted healthcare providers and schedule your
            appointment <br className="hidden sm:block" /> with ease.
          </p>
        </div>

        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 "
          href="#speciality"
        >
          Schedule an Appointment <FaLongArrowAltRight />{" "}
        </a>
      </div>

      {/* Right Side  */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.group_DOCS}
          alt="Doctor's Banner"
        />
      </div>
    </div>
  );
};

export default Header;
