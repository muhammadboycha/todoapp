import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskDetails } from '../components/TaskDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { isLogin } from '../helper';
export const ViewTaskDetails=()=>{
    const location = useLocation();
    const urlData = location.state;
    const [taskData,setTaskData] = useState({})
    const [color, setColor] = useState("");
    const [taskType, setTaskType] = useState("");
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

    useEffect(()=>{
        if(!isLogin()){
            navigate("/login");
        }
    },[navigate])
    return (
        <MainPage>
            <NavBar/>
            <BannerSection title={taskType}  bgColor={color} color={LightColors.secondaryWhite}/>
            <TaskDetails taskData={taskData} taskType={taskType} bgColors={color}/>
        </MainPage>
    )
}