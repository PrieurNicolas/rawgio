// import React, { useEffect, useState } from 'react'

// export default function Description({currentGame}) {
//     console.log(currentGame,"description.js")
//     const fetchAllDesc = async () => {
//         const res = await fetch(`https://api.rawg.io/api/games/${currentGame}?key=cd68cf822b8b4b59adf1c46ac1ea961c`);
//         const allDesc = await res.json({});
//         setAllDesc(allDesc);
//     }

//     useEffect(() => {
//         fetchAllDesc(currentGame);
//     }, [currentGame])

//     const [allDesc, setAllDesc] = useState([]);
//   return (
//     <>
//     <p>Description : {allDesc.Description}</p>
//     </>
//   )
// }
