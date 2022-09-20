import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Style from '../styles/Jeux.module.css'
export default function Gta() {
    
    const fetchAllJeux = async () => {
        const res = await fetch('https://api.rawg.io/api/games/3498?key=84e32df10f2943d1940ca4a7ff21baf8');
        const allJeux = await res.json({});
        setAllJeux(allJeux);
      }

    useEffect(() => {
        fetchAllJeux();
      }, [])
    
      const [allJeux, setAllJeux] = useState([]);

      console.log(allJeux);

  return (
    <>
        {allJeux.genres?.map(jeux => (
            <div key={jeux.id}>
                <a>
                    <div ><h1>{jeux.slug}</h1></div>
                </a>
            </div>
        ))}
    </>
  )
}
