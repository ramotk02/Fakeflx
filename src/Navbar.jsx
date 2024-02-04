import React from "react";
import img from "./assets/img1.png";


// Navbar
const Navbar = () => {
  return (
    <section className="bg-[#2D2D2D] h-[100px] flex justify-between items-center px-[30px]">
      <div>
        <a href="/">
          <img className="h-[100px]" src={img} alt="img" />
        </a>
      </div>

      <div className="pr-[25px]">
        <input
          type="search"
          placeholder="Search here!"
          className="bg-[#171616] px-[15px] py-[10px] rounded-md w-[350px] text-white "
        />
      </div>
    </section>
  );
};

export default Navbar;
