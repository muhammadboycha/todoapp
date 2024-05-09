import React, { useState } from "react";
import { DarkColors, LightColors } from "../constant/colors";
export const MainPage=({children})=>{
    
    const styles={
        mainPage:{
            backgroundColor: LightColors.white,
            width:'100%',
            height:'100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom:'100px',
            paddingTop:'100px',
            
        },
        container:{
            borderRadius:'15px',
            width:'30%',
            minHeight:'50vh',
            boxShadow:'rgba(0, 0, 0, 1) 0px 0px 17px -9px',
            padding:'15px'
        }
    }
    return(
        <div style={styles.mainPage} >
           <div style={styles.container}>
                    {children}
            </div>
        </div>
    )
}