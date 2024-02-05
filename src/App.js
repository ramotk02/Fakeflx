import './App.css';
import MovieList from './MovieList';
import img from "./assets/img1.png";
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <section>
      {/* <Navbar/> */}
      <section className="bg-[#2D2D2D] h-[100px] flex justify-between items-center px-[30px]">
        <div>
          <a href="/">
            <img className="h-[100px]" src={img} alt="img" />
          </a>
        </div>

        <div className="pr-[25px]">
          <input
          onChange={(e) => {
            setSearch(e.target.value)
            }}
            type="search"
            placeholder="Search here!"
            className="bg-[#171616] px-[15px] py-[10px] rounded-md w-[350px] text-white "
          />
        </div>
      </section>

      <MovieList searchValue={search.toLowerCase()} />

    </section>
  );
}

export default App;
