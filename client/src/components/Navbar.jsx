import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-2 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className=" w-52 cursor-pointer"
        src={assets.logoTransparent}
        alt="Logo"
      />

      <ul className="flex items-center justify-between gap-5 text-lg font-medium">
        <NavLink to={"/"}>
          <li>Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to={"/doctors"}>
          <li>All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to={"/about"}>
          <li>About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to={"/contact"}>
          <li>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-1 text-2xl cursor-pointer group relative">
            <div className="h-11 w-11 overflow-hidden rounded-full border border-zinc-800">
              <img
                className="h-full w-full object-cover object-center"
                src={assets.user}
                alt=""
              />
            </div>
            <IoMdArrowDropdown />

            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
