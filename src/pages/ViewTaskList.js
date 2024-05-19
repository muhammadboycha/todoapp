import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskListItem } from '../components/TasklistItem';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ViewTaskList=()=>{
    const location = useLocation();
    const urlData = location.state;
    const [taskType, setTaskType] = useState("");
    const [title,setTitle] = useState("");
    const [color, setColor] = useState("");
    const [taskList,setTaskList] = useState([]);

    const apiCall = async(type)=>{
        try{
            const userData = JSON.parse(localStorage.getItem('user'));

            let result = await axios.get("http://localhost:3001/getAllTask", {
                headers: {
                    token: userData.token
                }
                });
            result = result.data
            console.log(result)
            if(result.data){
                // console.log(result.data);
                if(type === 'overdue'){
                    const date = new Date();
                    setTaskList(result.data.filter(item => item.taskStatus === "inprogress" && new Date(item.endDate) < date));

                } else {
                    setTaskList(result.data.filter(item => item.taskStatus === type));
                }
               
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

    useEffect(()=>{
        if(urlData){
            setTitle(urlData.title);
            setTaskType(urlData.type);
            setColor(urlData.color);
            apiCall(urlData.type)
        }
    },[urlData]);
    return (
        <MainPage>
             <NavBar/>
             {taskType && 
                <BannerSection title={`${title} task list`} details={`You have ${taskList.length} task.`} bgColor={color} color={LightColors.secondaryWhite}/>
             }
            {taskList && taskList.map(item=>{
                return <TaskListItem taskData={item} taskType={title}  bgColors={color}/>
            })}
           
        </MainPage>
    )
}