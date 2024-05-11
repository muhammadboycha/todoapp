import React from 'react';
import { LightColors } from '../constant/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
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
            fontSize:'24px',
            cursor:'pointer',
        },
        icon:{
            fontSize:'24px',
            color:LightColors.primary,
            fontWeight:600,

        }
    };
   const  navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div style={styles.main}> 
            <div onClick={()=>{goBack()}} style={styles.iconBack}>
            <p style={styles.icon}><FontAwesomeIcon icon={faCircleArrowLeft} /></p>
            <p  style={styles.icon}>Back</p>
            </div>
            <div  style={styles.iconBack}>
            <p onClick={()=>{navigate('/')}} style={styles.icon}>Home</p>
            <p style={styles.icon}><FontAwesomeIcon icon={faFilter} /></p>
            </div>
            
        </div>
    )
}