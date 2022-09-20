import React, { useEffect, useState } from 'react'
import { HiArrowCircleDown, HiX } from "react-icons/hi"
import Style from '../styles/Accordion.module.css'
import Image from "next/image";

const AccordionUI = ({image, title, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

    const fetchAllJeux = async () => {
        const res = await fetch(`https://api.rawg.io/api/games?genres=${Id}&key=84e32df10f2943d1940ca4a7ff21baf8`);
        console.log(Id)
        const allJeux = await res.json({});
        setAllJeux(allJeux);
      }
    
    useEffect(() => {
        fetchAllJeux();
      }, [])
    
      const [allJeux, setAllJeux] = useState([]);

      
    return (
        <>
            <div className={Style.single}
                onClick={() => handleSetIndex(Id) || handleSetIndex(0) }>

                <div className={Style.genre}>
                    <div className={Style.divimage}><Image height={100} width={200} src={image}></Image><h1 className={Style.h3nom}>Genre : {title}</h1>
                    </div>
                </div>
                <div className={Style.arrow}>
                    {Index !== Id ? (
                        <HiArrowCircleDown className={Style.arrow1}/>
                    ) : (
                        <HiX className={Style.arrow2}/>
                    )}
                </div>
            </div>

            {Index === Id && (
                <div className={Style.children}>
                    
                    {allJeux.results?.map(jeux => (
            <div key={jeux.id} className={Style.single}>
                <a>
                    <div className={Style.divimage}><Image height={100} width={200} src={jeux.background_image}></Image><h1 className={Style.h3nom}>{jeux.name}</h1></div>
                </a>
            </div>
        ))}

                </div>
            )}
        </>
    );
};

export default AccordionUI;