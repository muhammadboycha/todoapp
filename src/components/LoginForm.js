import React, { useEffect, useState } from "react";
import { LightColors } from "../constant/colors";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
export const LoginForm=()=>{
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
            marginBottom:'40px',
            cursor: 'pointer'
        }, 
        loginWrapper: {
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
        },
        alreadyHaveAccount:{
            marginBottom: '0px',
            marginTop: '15px',
        },
        login:{
            marginBottom: '0px',
            marginTop: '15px',
        }
    }
    const navigate=useNavigate();
    const [name,setUserName] = useState("");
    const [mobile, setMobile] = useState();

    const apiCall = async()=>{
        try{
            let result = await axios.post("http://localhost:3001/login",{name,mobile})
            result = result.data
            if(result.data){
                setUserName("");
              setMobile("");
                localStorage.setItem("user", JSON.stringify({user: result.data.name,mobile: result.data.mobile, token: result.token}));
               navigate('/Dashboard');
            } else {
                toast.error(result.message, {
                    position: "top-right"
                  });
            }
            
        } catch(e){
            toast.error(e.message, {
                position: "top-right"
              });
        }
      
    }
    const Login=()=>{
        if(name && mobile) {
             // Validate name: should be a non-empty string
             let error = "";
             const nameRegex = /^[A-Za-z]+$/;
             if (!nameRegex.test(name) || name.length < 3) {
             error = 'Name must be alphabet and min. 3 characters long';
             toast.error(error,{
                 position: "top-right"
               })
             }
 
             // Validate mobile: should be exactly 10 digits
             const mobileRegex = /^\d{10}$/;
             if (!mobileRegex.test(mobile)) {
             error = 'Mobile number must be exactly 10 digits';
             toast.error(error,{
                 position: "top-right"
               })
             }
             if(!error){
                 apiCall();
             }
        } else {
            toast.error("Please enter name and mobile!",{
                position: "top-right"
              })
        }
    }
   
    return(
        <div>
            <h2 style={styles.heading}>Login</h2>
          <div style={styles.inputDiv}>
            <input style={styles.inputField} minLength={3} maxLength={50} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="Username"/>
            <input style={styles.inputField} minLength={10} maxLength={10} onChange={(e)=>{setMobile(e.target.value)}}  type="text" placeholder="Mobile"/>
          </div>  
          <div style={styles.loginWrapper}>
          <p style={styles.alreadyHaveAccount}>If you don't have account?</p>
          <Link to="/" style={styles.login}>Create new Account.</Link>
          </div> 
          <button onClick={()=>{Login()}} style={styles.createBtn}>Login</button>
        </div>
    )
}