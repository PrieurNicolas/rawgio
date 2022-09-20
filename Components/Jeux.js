// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Style from '../styles/Jeux.module.css'
// export default function Jeux() {
    
//     const fetchAllJeux = async () => {
//         const res = await fetch('https://api.rawg.io/api/games?key=84e32df10f2943d1940ca4a7ff21baf8');
//         const allJeux = await res.json({});
//         setAllJeux(allJeux);
//       }

//     useEffect(() => {
//         fetchAllJeux();
//       }, [])
    
//       const [allJeux, setAllJeux] = useState([]);

//       console.log(allJeux);

//   return (
//     <>
//         {allJeux.results?.map(jeux => (
//             <div key={jeux.id} className={Style.single}>
//                 <a>
//                     <div className={Style.divimage}><Image height={100} width={200} src={jeux.background_image}></Image><h1 className={Style.h3nom}>{jeux.name}</h1></div>
//                 </a>
//             </div>
//         ))}
//     </>
//   )
// }
