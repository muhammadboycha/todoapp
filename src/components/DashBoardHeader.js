import React, { useEffect, useState } from "react";
import { LightColors } from '../constant/colors';
import ProfileImage from '../assets/images/profile.svg';
export const DashBoardHeader=()=>{
    const [username,setUserName] = useState("")
    const styles={
        header:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
        },
        name:{
            fontSize: '27px',
            color:LightColors.primary,
            fontWeight:600,
            marginBottom:'10px',
            marginTop: '0px',
        },
        subText:{
            marginTop:'0px',
            fontSize: '14px',
            fontWeight:'lighter',
            color:LightColors.gray
        },
        profile:{
            height:'70px',
            weight: '70px',
            borderRadius: '50%'
        }
    }

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log(userData)
        if(userData){
            setUserName(userData.user);
        }
    },[])

    return(
        <div style={styles.header}>
            <div>
              {username &&  <p style={styles.name}>Hey, {username}</p> }
                <p style={styles.subText}>Let’s make this day productive</p>
            </div>
            <div>
                <img style={styles.profile} src={ProfileImage}/>
            </div>

        </div>
    )
}