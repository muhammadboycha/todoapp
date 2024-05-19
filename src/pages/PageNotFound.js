import React from "react"
import { MainPage } from "./MainPage"
import { LightColors } from "../constant/colors"
export const PageNotFound =()=>{
    const styles={
        main:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        pageNotFound:{
            color:LightColors.danger,
            fontSize:"25px",
            fontWeight:600,
            
        }
    }
    return(
        <MainPage >
            <div style={styles.main}>
                <p style={styles.pageNotFound}>  Page not found! </p>
            </div>
        </MainPage>
    )
}