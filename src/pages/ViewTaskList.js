import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskListItem } from '../components/TasklistItem';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { isLogin } from '../helper';

export const ViewTaskList=()=>{
    const location = useLocation();
    const urlData = location.state;
    const [taskType, setTaskType] = useState("");
    const [title,setTitle] = useState("");
    const [color, setColor] = useState("");
    const [taskList,setTaskList] = useState([]);
    const navigate=useNavigate();

    const apiCall = async(type)=>{
        try{
            const userData = JSON.parse(localStorage.getItem('user'));

            let result = await axios.get("http://localhost:3001/getAllTask", {
                headers: {
                    token: userData.token
                }
                });
            result = result.data
            if(result.data){
                if(type === 'overdue'){
                    const date = new Date();
                    setTaskList(result.data.filter(item => item.taskStatus === "inprogress" && !item.isDeleted && new Date(item.endDate) < date));

                } else if(type === "deleted" ){
                    setTaskList(result.data.filter(item => item.isDeleted === true));
                } else {
                    setTaskList(result.data.filter(item => item.taskStatus === type && !item.isDeleted));
                }
               
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

    useEffect(()=>{
        if(urlData){
            setTitle(urlData.title);
            setTaskType(urlData.taskType);
            setColor(urlData.color);
            apiCall(urlData.taskType)
        } else {
            navigate("/");
        }
    },[urlData]);
    
    useEffect(()=>{
        if(!isLogin()){
            navigate("/login");
        }
    },[navigate])

    const Handler=()=>{
        navigate('/CreateTask')
    }

    const styles = {
        wrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '50vh',
            width: '100%',
        },
        title:{
            color:LightColors.gray,
            textAlign: 'center',
        },
        createTask:{
            width: '150px',
            fontSize: '16px',
            padding: '10px',
            border: 'none',
            borderRadius: '15px',
            marginTop: '5px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            cursor: 'pointer',
            
        },
        mainNavigationWrapper:{
            position: 'sticky',
            top: '0',
            backgroundColor: LightColors.white
        },
        secondaryNavigationWrapper:{
            padding: '0px 7px'
        }
    }

    return (
        <MainPage>
            <div style={styles.mainNavigationWrapper}>
             <NavBar/>
             {taskType && 
                <BannerSection title={`${title} task list`} details={`You have ${taskList.length} task.`} bgColor={color} color={LightColors.secondaryWhite}/>
             }
            </div>
            <div style={styles.secondaryNavigationWrapper}>
            {taskList && taskList.map(item=>{
                return <TaskListItem taskData={item} taskType={title}  bgColors={color}/>
            }).reverse()}

            {taskList.length === 0 ? <div style={styles.wrapper}>
                <p style={styles.title}>No task found! <br/>
                Make plan to get things done!</p>
                <button onClick={()=>{Handler()}} style={styles.createTask}>Create New Task</button>
            </div>:""}
            </div>
           
        </MainPage>
    )
}