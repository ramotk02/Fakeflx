import React from "react";
import MovieList from "./MovieList";
import { Search } from "react-router-dom";
import img from "./assets/img1.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const [search, setSearch] = useState("");

  return (
    <div>
      <section className="bg-[#2D2D2D] h-[100px] flex justify-between items-center px-[30px]">
        <div>
          <Link to="/">
            <img className="h-[100px]" src={img} alt="img" />
          </Link>
        </div>

        <header>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {window.location.pathname === "/" && <Outlet />}

        <div className="pr-[25px]">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search here!"
            className="bg-[#171616] px-[15px] py-[10px] rounded-md w-[350px] text-white "
          />
        </div>
      </section>
      <MovieList searchValue={search.toLowerCase()} />
    </div>
  );
};

export default Home;
