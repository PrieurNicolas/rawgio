// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Style from '../styles/Jeux.module.css'
// export default function Gta() {

//     const [allJeux2, setAllJeux2] = useState([]);
    
//     const fetchAllJeux2 = async () => {
//         const res = await fetch('https://api.rawg.io/api/games/3498?key=84e32df10f2943d1940ca4a7ff21baf8');
//         const allJeux2 = await res.json({});
//         setAllJeux2(allJeux2);
//       }

//     useEffect(() => {
//         fetchAllJeux2();
//       }, [])
    

//       console.log(allJeux2);

//   return (
//     <>
//         {allJeux2.developers?.map(data => (
//             <>
//             <div key={data.id}>
//                 <a>
//                     <div><h1>{data.name}</h1></div>
//                 </a>
//             </div>
//             </>
//         ))}

//         <h3>{allJeux2.playtime}</h3>
//     </>
//   )
// }
