import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskDetails } from '../components/TaskDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import axios from 'axios';
import { isLogin } from '../helper';

export const ChangeTaskStatus=()=>{
    const location = useLocation();
    const urlData = location.state;
    const [taskData,setTaskData] = useState({})
    const [color, setColor] = useState("");
    const [taskType, setTaskType] = useState("");
    const [status,setStatus] = useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        if(urlData){
            console.log("urlData",urlData);
            setTaskData(urlData.data);
            setColor(urlData.color);
            setTaskType(urlData.taskType);
        }
      

    },[urlData]);
    const styles = {
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
    } 

    const apiCall = async()=>{
        try{
            const userData = JSON.parse(localStorage.getItem('user'));
    
            let result = await axios.post("http://localhost:3001/statusUpdate",{id:taskData._id,status}, {
                headers: {
                    token: userData.token
                }
                });
            result = result.data
            console.log(result)
            if(result.data){
                // console.log(result.data);
                toast.success(result.data.message, {
                    position: "top-right"
                  });
                const data = {
                  color:LightColors.primary,
                  type:'inprogress' 
                }
                navigate('/ViewTaskList', { state: data })
            } else {
                toast.error(result.message, {
                    position: "top-right"
                  });
            }
            
        } catch(e){
           console.log("message error",e)
    
            toast.error(e.message, {
                position: "top-right"
              });
        }
      }
    const updateStatus = ()=>{
        console.log("task end date",status);
        if(status){
             apiCall();
        }
    }
    const options = ['completed'];
    
    useEffect(()=>{
        if(!isLogin()){
            navigate("/login");
        }
    },[navigate])

    return (
        <MainPage>
            <NavBar/>
            <BannerSection title={taskType}  bgColor={color} color={LightColors.secondaryWhite}/>
            <TaskDetails taskData={taskData} bgColors={color}/>
            <select style={styles.createBtn} value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="" disabled>Select an option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {status && <p>You selected: {status}</p>}
            <button onClick={()=>{updateStatus()}} style={styles.createBtn}>Update status</button>
        </MainPage>
    )
}