import React, { useEffect, useState } from 'react'
import AccordionUI from "../Components/AccordionUI"
import Style from '../styles/Accordion.module.css'

function Accordion() {
    const [Index, setIndex] = useState(false);

    const fetchAllGenres = async () => {
        const res = await fetch('https://api.rawg.io/api/genres?key=84e32df10f2943d1940ca4a7ff21baf8');
        const allGenres = await res.json();
        setAllGenres(allGenres);
      }

    useEffect(() => {
        fetchAllGenres();
      }, [])
    
      const [allGenres, setAllGenres] = useState([]);

    return (
        <div className={Style.datadiv}>
            <div className={Style.divtitre}><h1 className={Style.titre}>Genres :</h1></div>
            {allGenres.results?.map((data) => {
                return (
                    <AccordionUI
                    image={data.image_background}
                    title={data.name} 
                    Id={data.id}
                    Index={Index} 
                    setIndex={setIndex}>
                    </AccordionUI>
                );
            })}
        </div>
    );
}

export default Accordion