import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskDetails } from '../components/TaskDetails';
import { useLocation } from 'react-router-dom';
export const ViewTaskDetails=()=>{
    const location = useLocation();
    const urlData = location.state;
    const [taskData,setTaskData] = useState({})
    const [color, setColor] = useState("");
    const [taskType, setTaskType] = useState("");

    useEffect(()=>{
        if(urlData){
            console.log("urlData",urlData);
            setTaskData(urlData.data);
            setColor(urlData.color);
            setTaskType(urlData.taskType);
        }
      

    },[urlData]);
    return (
        <MainPage>
            <NavBar/>
            <BannerSection title={taskType}  bgColor={color} color={LightColors.secondaryWhite}/>
            <TaskDetails taskData={taskData} bgColors={color}/>
        </MainPage>
    )
}