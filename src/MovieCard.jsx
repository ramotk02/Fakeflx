// MovieCard.js
import React from "react";



const MovieCard = ({ name, image, rate, link }) => {
  return (
    <div className="bg-[black] w-[250px] text-center rounded-xl overflow-hidden relative max-w-xs bg-cover bg-no-repeat">
      <img src={image} alt={`Poster for ${name}`} className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110" />
      <div className="py-2">
        <span className="text-2xl">{name}</span>
        <p className="text-lg">
          Rated {rate} |{""}
          <a href={link} className="text-yellow-300" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
