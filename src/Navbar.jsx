import React from "react";
import img from "./assets/img2.png";

const Navbar = () => {
  return (
    <section className="bg-[black] h-[100px] flex justify-between items-center px-[30px]">
      <div>
        <a href="/">
          <img className="h-[100px]" src={img} alt="img" />
        </a>
      </div>

      <div className="pr-[25px]">
        <input
          type="search"
          placeholder="Search here!"
          className="bg-[#242e2f] px-[15px] py-[10px] rounded-md w-[350px] text-white "
        />
      </div>
    </section>
  );
};

export default Navbar;
