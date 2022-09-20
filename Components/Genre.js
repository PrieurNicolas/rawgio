// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Style from '../styles/Jeux.module.css'
// export default function Genre() {
    
//     const fetchAllGenres = async () => {
//         const res = await fetch('https://api.rawg.io/api/genres?key=84e32df10f2943d1940ca4a7ff21baf8');
//         const allGenres = await res.json({});
//         setAllGenres(allGenres);
//       }

//     useEffect(() => {
//         fetchAllGenres();
//       }, [])
    
//       const [allGenres, setAllGenres] = useState([]);

//       console.log(allGenres);

//   return (
//     <>
//         <div className={Style.divtitre}><h1 className={Style.titre}>All Genres</h1></div>
//         {allGenres.results?.map(genre => (
//             <div key={genre.id} className={Style.single}>
//                 <a>
//                     <div className={Style.divimage}><Image height={100} width={200} src={genre.image_background}></Image><h1 className={Style.h3nom}>Genre : {genre.name}</h1></div>
//                 </a>
//             </div>
//         ))}
//     </>
//   )
// }
