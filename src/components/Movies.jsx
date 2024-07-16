// import React from "react";
// import { useState, useEffect } from "react";
// import { getMovies } from "../utils/movieapi";

// const Movies = () => {
//   const [movieData, setMovieData] = useState([]);

//   useEffect(() => {
//     fetchmovie();
//   }, []);

//   const fetchmovie = (event) => {
//     getMovies(`series/?q=${event}`).then((res) => {
//       const data = res;
//       console.log(data);
//       setMovieData(data);
//       console.log(movieData);
//     });
//   };
//   return (
//     <div>
//       {movieData.map((d) => {
//         return (
//           <div key={d.id}>
//             <h1>{d.title}</h1>
//             <img src={d.image} alt={d.title} />
//             <p>{d.description}</p>
//             <p>{d.year}</p>
//             <p>{d.rating}</p>
//             <a
//               href={d.imdb_link}
//               className="bg-red-500 text-white rounded-xl p-2 "
//             >
//               Watch Now
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Movies;
