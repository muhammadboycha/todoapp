
import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { MainPage } from "./MainPage";
import { BannerSection } from "../components/BannerSection";
import { LightColors } from "../constant/colors";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { isLogin } from "../helper";
export const UpdateTask = () => {
  
  const styles = {
    main:{
        marginBottom: '230px',
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
  const location = useLocation();
  const urlData = location.state;
  const [taskData,setTaskData] = useState({});
  const [taskType,setTaskType] = useState("");
  const [color,setColor] = useState("");
  

  const apiCall = async()=>{
    try{
        const userData = JSON.parse(localStorage.getItem('user'));

        let result = await axios.post("http://localhost:3001/updateTask",{newTaskDetails:taskDetails,id:taskData._id}, {
            headers: {
                token: userData.token
            }
            });
        result = result.data
        if(result.data){
             let data;
             if(taskType === "Todo"){
               data = {
                color:LightColors.primary,
                title:"Todo",
                taskType:"todo" 
              }
             } else if(taskType === "In Progress") {
              data = {
                color:LightColors.warning,
                title:"In Progress",
                 taskType:"inprogress" 
              }
            } else {
              data = {
                color:LightColors.danger,
                title:"Overdue",
                 taskType:"overdue" 
              }
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
  const update=()=>{
      if(taskDetails){
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
    if(urlData){
        setTaskData(urlData.taskData);
        setTaskDetails(urlData.taskData.taskDetails)
        setTaskType(urlData.taskType);
        setColor(urlData.bgColors);
    } else {
      navigate("/");
  }
},[urlData]);

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
        <h2 style={styles.heading}>Update Task</h2>
        
        <textarea minLength={3} maxLength={250}  style={styles.inputField} onChange={(e)=>setTaskDetails(e.target.value)} value={taskDetails} type="text" placeholder="Please enter your task details" >{taskDetails}</textarea>
        
        <button onClick={()=>{update()}} style={styles.createBtn}>Update</button>
      </div>
    </MainPage>
  );
};
