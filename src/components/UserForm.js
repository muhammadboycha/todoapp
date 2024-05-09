import React from "react";
import { LightColors } from "../constant/colors";

export const UserForm=()=>{
    const styles={
        heading:{
            color:LightColors.secondaryBlack,
            fontSize:'25px'
        },
        inputDiv:{
            display: 'flex',
            flexDirection:'column',
            gap:'15px'
        },
        inputField:{
            paddingTop: '16px',
            paddingBottom: '16px',
            borderRadius: '15px',
            fontSize:'16px',
            border: '0px',
            paddingLeft: '16px',
            boxShadow:'rgba(0, 0, 0, 1) 0px 0px 18px -12px'
        },
        createBtn:{
            width: '100%',
            fontSize: '22px',
            padding: '10px',
            border: 'none',
            borderRadius: '15px',
            marginTop: '35px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            marginBottom:'40px'
        },
    }
    return(
        <div>
            <h2 style={styles.heading}>Create account</h2>
          <div style={styles.inputDiv}>
            <input style={styles.inputField} type="text" placeholder="Username"/>
            <input style={styles.inputField}  type="text" placeholder="Mobile"/>
          </div>  
          <button style={styles.createBtn}>Create account</button>
        </div>
    )
}