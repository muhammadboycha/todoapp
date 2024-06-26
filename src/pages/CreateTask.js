import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { MainPage } from "./MainPage";
import { BannerSection } from "../components/BannerSection";
import { LightColors } from "../constant/colors";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { isLogin } from "../helper";
import { envConstant } from "../envConstant";
export const CreateTask = () => {
  
  const styles = {
    main:{
        
    },
    heading: {
      color: LightColors.secondaryBlack,
      fontSize: "25px",
    },
    inputField: {
      width: 'calc(100% - 17px)',
      paddingTop: "16px",
      paddingBottom: "16px",
      borderRadius: "15px",
      fontSize: "16px",
      border: "0px",
      paddingLeft: "16px",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 18px -12px",
    },
    createBtn: {
      width: "100%",
      fontSize: "22px",
      padding: "10px",
      border: "none",
      borderRadius: "15px",
      marginTop: "35px",
      fontFamily: "Roboto",
      color: "white",
      backgroundColor: LightColors.primary,
      marginBottom: "40px",
      cursor: "pointer"
    }
  };
  
  const [taskDetails, setTaskDetails] = useState("");
  const navigate=useNavigate();

  const apiCall = async()=>{
    try{
        const userData = JSON.parse(localStorage.getItem('user'));

        let result = await axios.post(`${envConstant.apiUrl}/createTask`,{taskDetails}, {
            headers: {
                token: userData.token
            }
            });
        result = result.data
        if(result.data){
            const data = {
              color:LightColors.primary,
              title:"Todo",
              taskType:"todo" 
            }
            navigate('/ViewTaskList', { state: data })
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
  const create=()=>{
      if(taskDetails){
         // Validate name: should be a non-empty string
         let error = "";
         if (taskDetails.length < 3 ) {
         error = 'Task details must be at least 3 characters long.';
         toast.error(error,{
             position: "top-right"
           })
         }

         if(!error){
             apiCall();
         }
      } else {
        toast.error("Please enter the task details.", {
          position: "top-right"
        });
      }
  
  }

  useEffect(()=>{
       
    if(!isLogin()){
        navigate("/login");
    }
  
},[navigate])
 
  return (
    <MainPage>
      <NavBar />
      <BannerSection
        title="Make plan to get things done!"
        subTitle="You are almost there"
        details="All in one place to mange your task  efficiently."
        bgColor={LightColors.primary}
        color={LightColors.white}
      />
      <div style={styles.main}>
        <h2 style={styles.heading}>Create Task</h2>
        
          <textarea minLength={3} maxLength={250} style={styles.inputField} onChange={(e)=>setTaskDetails(e.target.value)} type="text" placeholder="Please enter your task details" ></textarea>
        
        <button onClick={()=>{create()}} style={styles.createBtn}>Create</button>
      </div>
    </MainPage>
  );
};
