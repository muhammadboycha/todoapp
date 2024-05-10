import React from 'react';
import { LightColors } from '../constant/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
export const NavBar=()=>{
    const styles={
        main:{
            display: 'flex',
            justifyContent:'space-between',  
            alignItems: 'center',       
        },
        iconBack:{
            display: 'flex',
            gap:'10px',
            fontSize:'24px'
        },
        icon:{
            fontSize:'24px',
            color:LightColors.primary,
            fontWeight:600,

        }
    }
    return (
        <div style={styles.main}> 
            <div style={styles.iconBack}>
            <p style={styles.icon}><FontAwesomeIcon icon={faCircleArrowLeft} /></p>
            <p style={styles.icon}>BACK</p>
            </div>
            <div style={styles.icon}><FontAwesomeIcon icon={faHouse} /></div>
        </div>
    )
}