import React, { useEffect, useState } from "react";
import { LightColors } from "../constant/colors";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { envConstant } from "../envConstant";

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
            marginTop: '15px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            marginBottom:'5px',
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
    const [name,setUserName] =useState("");
    const [mobile,setMobile] =useState();
    const [apiResponse,setApiResponse] = useState();
    const [errorMsg,setErrorMsg] = useState("")
    const [countdown, setCountdown] = useState(3); // Initial countdown value
    const [isSuccess, setIsSuccess] = useState(false); //
    const [email, setEmail] = useState(""); //

    const apiCall = async()=>{
        try{
            const result = await axios.post(`${envConstant.apiUrl}/createUser`,{name,mobile,email})
            setApiResponse(result)
            toast.success(result.data.message, {
                position: "top-right"
              });
              setUserName("");
              setMobile("");
              setEmail("");
              setIsSuccess(true);
           
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
    const createAccount=()=>{
        // navigate('/Login')
        if(name && mobile && email) {
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
            toast.error("Please enter name, mobile and email!",{
                position: "top-right"
              })
        }
    }

    
    useEffect(() => {
        // Set up the countdown interval
        if(isSuccess){
            
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Redirect when countdown reaches zero
        if (countdown === 0 ) {
             navigate('/login'); // Replace '/login' with your login route
        }
// Clean up the interval on component unmount
return () => clearInterval(interval);
    }
        
    }, [countdown, navigate,isSuccess]);
    return(
        <div>
            <h2 style={styles.heading}>Create account</h2>
          
          <div style={styles.inputDiv}>
            <input onFocus={()=>setErrorMsg("")} style={styles.inputField} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="Username"/>
            <input onFocus={()=>setErrorMsg("")} style={styles.inputField} onChange={(e)=>{setMobile(e.target.value)}}  type="text" placeholder="Mobile"/>
            <input onFocus={()=>setErrorMsg("")} style={styles.inputField} onChange={(e)=>{setEmail(e.target.value)}}  type="text" placeholder="Email"/>
          </div> 
          <div style={styles.loginWrapper}>
          <p style={styles.alreadyHaveAccount}>Already have account?</p>
          <Link to="/Login" style={styles.login}>Login</Link>
          </div> 
          {isSuccess && <div style={styles.successMessage} > You will be redirected to the login page in {countdown} seconds.</div> }
          <button onClick={()=>{createAccount()}} style={styles.createBtn}>Create account</button>
        </div>
    )
}