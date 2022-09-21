import React, { useEffect, useState } from 'react'

export default function Description({currentGame}) {
    console.log(currentGame,"description.js")
    const fetchAllDesc = async () => {
        const res = await fetch(`https://api.rawg.io/api/games/${currentGame}?key=84e32df10f2943d1940ca4a7ff21baf8`);
        const allDesc = await res.json({});
        setAllDesc(allDesc);
    }

    useEffect(() => {
        fetchAllDesc(currentGame);
    }, [currentGame])

    const [allDesc, setAllDesc] = useState([]);
  return (
    <>
    </>
  )
}
