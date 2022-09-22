import React, { useEffect, useState } from 'react'
import AccordionUI from "../Components/AccordionUI"
import Style from '../styles/Accordion.module.css'

function Accordion() {
    const [Index, setIndex] = useState(false);

    const fetchAllGenres = async () => {
        const res = await fetch('https://api.rawg.io/api/genres?key=cd68cf822b8b4b59adf1c46ac1ea961c');
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