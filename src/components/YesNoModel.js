import React from 'react';
import { LightColors } from '../constant/colors';

export const YesNoModal = ({ onYes, onNo, text }) => {

    const handleModalClick= (e)=>{
        e.stopPropagation();
    }
   
    const styles = {
        container:{
           
        },
        buttonWrapper:{
            display: 'flex',
            gap: '10px'
        },
        title:{
            fontSize: '18px',
        },
        yes:{
                width: '50%',
                fontSize: '16px',
                padding: '10px',
                border: 'none',
                borderRadius: '15px',
                marginTop: '15px',
                fontFamily:'Roboto',
                color: 'white',
                backgroundColor:LightColors.primary,
                marginBottom:'5px',
                cursor: 'pointer'
        },
        no:{
            width: '50%',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '15px',
            marginTop: '15px',
            fontFamily:'Roboto',
            color: LightColors.primary,
            border: `1px solid ${LightColors.primary}`,
            marginBottom:'5px',
            cursor: 'pointer'
        }

    }
    return <div className="toast-overlay">
        <div style={styles.container} className="yes-no-modal" onClick={(e)=>handleModalClick(e)}>
        <p style={styles.title}>{text}</p>
        <div style={styles.buttonWrapper}>
            <button style={styles.yes} onClick={()=>onYes()}>Yes</button>
            <button style={styles.no} onClick={()=>onNo()}>No</button>
        </div>
  </div>
  </div>
};

