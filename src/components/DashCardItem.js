import React from "react";
import { LightColors } from "../constant/colors";

export const DashBoardCard =({title,count,primaryColor})=>{
    const styles={
        mainContainer:{
            border:'none',
            display: 'flex',
            flexDirection:'column',
            borderLeft:`5px solid ${primaryColor}`,
            borderRadius:'15px',
            boxShadow:'rgba(0, 0, 0, 1) 0px 0px 18px -12px',
            justifyContent: 'center',
            width:'calc(50% - 15px)',
            marginBottom:'7px'

        },
        header:{
            borderBottom:`2px solid ${primaryColor}`,
            padding:'15px',
            color:primaryColor,
            fontSize:'20px',
            fontWeight:'bold',
        },
        details:{
            display: 'flex',
            padding:'15px',
            alignItems: 'center',
            gap:'15px'
            
        },
        task:{
            color:LightColors.gray,
            fontSize:'18px',
            fontWeight:'bold'
        },
        count:{
            fontSize:'35px',
            fontWeight:'bold',
            color:primaryColor
        }
    }
    return(
        <div style={styles.mainContainer} >
            <div style={styles.header}>
                {title}
            </div>
            <div style={styles.details}>
                <div style={styles.count}>{count}</div>
                <div style={styles.task}>Task</div>
            </div>
        </div>
    )
}