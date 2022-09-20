import React from "react"
import { HiArrowCircleDown, HiX } from "react-icons/hi"
import Style from '../styles/Accordion.module.css'
import Image from "next/image";

const AccordionUI = ({image, title, children, Id, Index, setIndex }) => {
    const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

    return (
        <>
            <div className={Style.single}
                onClick={() => handleSetIndex(Id)}>
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
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionUI;