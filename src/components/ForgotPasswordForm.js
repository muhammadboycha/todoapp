import React, { useEffect, useState } from "react";
import { LightColors } from "../constant/colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { envConstant } from "../envConstant";

export const ForgotPasswordForm=()=>{
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
            marginTop: '15px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            marginBottom:'5px',
            cursor: 'pointer'
        },
        loginWrapper: {
            marginBottom: '50px',
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
        },
        errorMessage:{
            color: LightColors.danger,
            marginTop: '10px',
            textAlign: 'center',
            display: 'block',
        },
        successMessage:{
            marginTop: '10px',
            color: LightColors.primary,
        }
    }
    const navigate=useNavigate();
    const [email, setEmail] = useState(""); //

    const apiCall = async()=>{
        try{
            const result = await axios.post(`${envConstant.apiUrl}/forgotPassword`,{email})
           
            if(result.data.success){
                    toast.success(result.message, {
                        position: "top-right"
                      });
                      setEmail("");
                    navigate("/login");
                } else {
                    toast.error(result.data.message, {
                        position: "top-right"
                      });
                }
          
           
        } catch(e){
           if(e.response.status === 400){
            toast.error(e.response.data.message, {
                position: "top-right"
              });
           } else {
            toast.error(e.response.data.message, {
                position: "top-right"
              });
           }
           
        }
      
    }
    const forgotPassword=()=>{
        // navigate('/Login')
        if(email) {
            let error;
            // Validate email: should be a valid email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                error = 'Email must be a valid email address';
                toast.error(error, {
                position: 'top-right'
                });
            }
            if(!error){
                apiCall();
            }
        } else {
            toast.error("Please enter your email!",{
                position: "top-right"
              })
        }
    }

    
    return(
        <div>
            <h2 style={styles.heading}>Forgot Pasword!</h2>
          
          <div style={styles.inputDiv}>
            <input  style={styles.inputField} onChange={(e)=>{setEmail(e.target.value)}}  type="text" placeholder="Email"/>
          </div> 
          <div style={styles.loginWrapper}>
          <p style={styles.alreadyHaveAccount}>Already have account?</p>
          <Link to="/Login" style={styles.login}>Login</Link>
          </div> 
          <button onClick={()=>{forgotPassword()}} style={styles.createBtn}>Get Password</button>
        </div>
    )
}