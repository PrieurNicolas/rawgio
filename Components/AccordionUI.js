import React, { useEffect, useState } from 'react'
import { HiArrowCircleDown, HiX } from "react-icons/hi"
import Style from '../styles/Accordion.module.css'
import Image from "next/image";
import Description from './Description';

const AccordionUI = ({ image, title, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => Index !== Id && setIndex(Id);


    const fetchAllJeux = async () => {
        const res = await fetch(`https://api.rawg.io/api/games?genres=${Id}&key=cd68cf822b8b4b59adf1c46ac1ea961c`);
        const allJeux = await res.json({});
        setAllJeux(allJeux);
    }

    useEffect(() => {
        fetchAllJeux();
    }, [])

    const [allJeux, setAllJeux] = useState([]);
    const [currentGame, setCurrentGame] = useState({});
    console.log(currentGame)

    const selectIdGame = async(e) => {
        e.preventDefault();
        setCurrentGame(e.currentTarget.id);
    }


    const [allJeux2, setAllJeux2] = useState([]);
    
    const fetchAllJeux2 = async () => {
        const res2 = await fetch(`https://api.rawg.io/api/games/${currentGame}?key=cd68cf822b8b4b59adf1c46ac1ea961c`);
        const allJeux2 = await res2.json({});
        setAllJeux2(allJeux2);
      }

    useEffect(() => {
        fetchAllJeux2();
      }, [])
      console.log(allJeux.id)


    return (
        <>
            <div className={Style.single}
                onClick={() => handleSetIndex(Id) || handleSetIndex(0) || handleSetIndex(Id)}>

                <div className={Style.genre}>
                    <div className={Style.divimage}><Image height={100} width={200} src={image}></Image><h1 className={Style.h3nom}>Genre : {title}</h1>
                    </div>
                </div>
                <div className={Style.arrow}>
                    {Index !== Id ? (
                        <HiArrowCircleDown className={Style.arrow1} />
                    ) : (
                        <HiX className={Style.arrow2} />
                    )}
                </div>
            </div>

            {Index === Id && (
                <div className={Style.children}>

                    {allJeux.results?.map(jeux => (
                        <div id={jeux.id}key={jeux.id} className={Style.singlejeux} onClick={selectIdGame && fetchAllJeux2}>

                            <div className={Style.divimagejeux}>
                                <Image height={100} width={200} src={jeux.background_image}></Image><h1 className={Style.h3jeux}>{jeux.name}</h1><p className={Style.preleased}>Date de sortie : {jeux.released} <br />mis à jour : {jeux.updated}</p>
                            </div>
                            {/* <p>Description : {allJeux2.description}</p> */}


                        </div>
                    ))}

                </div>
            )}
        </>
    );
};

export default AccordionUI;