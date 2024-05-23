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
import { envConstant } from '../envConstant';

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
            setTaskData(urlData.data);
            setColor(urlData.color);
            setTaskType(urlData.taskType);
        } else {
            navigate("/");
        }
      

    },[urlData]);
    const styles = {
        selectStatus: {
            width: "100%",
            fontSize: "16px",
            padding: "10px",
            border: `1px solid ${LightColors.gray}`,
            borderRadius: "15px",
            marginTop: "25px",
            fontFamily: "Roboto",
            color: LightColors.gray,
            marginBottom: "40px",
            cursor: "pointer"
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
            cursor: 'pointer',
            
        }

    } 

    const apiCall = async()=>{
        try{
            const userData = JSON.parse(localStorage.getItem('user'));
    
            let result = await axios.post(`${envConstant.apiUrl}/taskCompleted`,{id:taskData._id}, {
                headers: {
                    token: userData.token
                }
                });
            result = result.data
            if(result.data){
                toast.success(result.data.message, {
                    position: "top-right"
                  });
                const data = {
                  color:LightColors.success,
                  taskType:'completed',
                  title:'Completed'
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
    const updateStatus = ()=>{
        if(status){
             apiCall();
        } else{
            toast.error("Please select the completed option.", {
                position: "top-right"
              });
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
            <BannerSection title={taskType}  bgColor={LightColors.warning} color={LightColors.secondaryWhite}/>
            <TaskDetails taskData={taskData} taskType={taskType} bgColors={LightColors.warning}/>
            <select style={styles.selectStatus} value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="" disabled>Select an option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={()=>{updateStatus()}} style={styles.createBtn}>Update status</button>
        </MainPage>
    )
}