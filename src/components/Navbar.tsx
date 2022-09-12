import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
          <Link to={"/"}>
            <span className="text-xl uppercase font-extrabold text-red-400">
              Home
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
