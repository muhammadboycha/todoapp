import React from "react";
export const Image = ({src, width,height})=>{
    return (
        <>
        <img alt="Image link is broken!" src={src} height={height} width={width}/>
        </>
    )
}