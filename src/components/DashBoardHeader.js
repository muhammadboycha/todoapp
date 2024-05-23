import React, { useEffect, useState } from "react";
import { LightColors } from '../constant/colors';
import ProfileImage from '../assets/images/profile.svg';
import { Logout } from "./Logout";
export const DashBoardHeader=()=>{
    const [username,setUserName] = useState("")
    const [showLogout,setShowLogout] = useState(false);
    const styles={
        header:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            marginTop: '15px',
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
            height:'55px',
            weight: '55px',
            borderRadius: '50%',
            cursor: 'pointer',
        },
        logout:{
            position: "absolute",
            background: "white",
           
            display: "flex",
            right: "15px",
            border:`1px solid ${LightColors.gray}`,
            borderRadius: "15px",
            gap: "10px",
            alignItems: "center"
        }
    }

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem('user'));
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
                <img style={styles.profile} onClick={()=>setShowLogout(!showLogout)} src={ProfileImage}/>
                {showLogout && <div style={styles.logout}>
                     <Logout>Logout</Logout> 
                </div>}
                
            </div>

        </div>
    )
}