// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import Jmj from './assets/jmj.png';
import batman from './assets/batman.jpeg';
import dictator from './assets/dictator.jpeg';
import flash from './assets/flash.jpeg';
import under from './assets/under.webp';
import hw from './assets/highwaymen.jpeg'
import cmiyc from './assets/aff2.webp'
import lift from './assets/lift.webp'
import mib from './assets/mib3.jpeg'
const MovieList = () => {
  const films = [
    { name: "Jumanji", image: Jmj, link: "https://www.netflix.com/watch/80192646?trackId=255824129&tctx=0%2C1%2C645c6ef6-405c-42cf-9850-11b0ffde8c52-318290276%2C645c6ef6-405c-42cf-9850-11b0ffde8c52-318290276%7C2%2Cunknown%2C%2C%2CtitlesResults%2C80192646%2CVideo%3A80192646%2CminiDpPlayButton", rate: 10 },
    { name: "Batman", image: batman, link: "https://www.netflix.com/title/70079583", rate: 10 },
    { name: "The Dictator", image: dictator, link: "https://www.netflix.com/watch/70228042?trackId=255824129&tctx=1%2C6%2C01266522-2872-46ba-b661-c00c0390bb43-194980132%2C01266522-2872-46ba-b661-c00c0390bb43-194980132%7C2%2Cunknown%2C%2C%2CtitlesResults%2C70228042%2CVideo%3A70228042%2CminiDpPlayButton", rate: 9 },
    { name: "The Flash", image: flash, link: "https://www.netflix.com/search?q=the%20fla&jbv=80027042", rate: 6 },
    { name: "6 Underground", image: under, link: "https://www.netflix.com/search?q=6%20under&jbv=81001887", rate: 10 },
    { name: "The Highwaymen", image: hw, link: "https://www.netflix.com/title/80200571", rate: 8.5 },
    { name: "Catch if you can", image: cmiyc, link: "https://www.netflix.com/title/60024942", rate: 8 },
    { name: "Lift", image: lift, link: "https://www.netflix.com/title/81446739", rate: 10 },
    { name: "Men in Black 3", image: mib, link: "https://www.netflix.com/title/70217910", rate: 10 },

  ];

  return (
    <section>
      <div className="flex gap-4 p-[60px] flex-wrap justify-center">
        {films.map((film, index) => (
          <MovieCard
            key={index}
            name={film.name}
            image={film.image}
            link={film.link}
            rate={film.rate}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
