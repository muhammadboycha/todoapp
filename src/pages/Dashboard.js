import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { DashBoardHeader } from '../components/DashBoardHeader';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { DashBoardCard } from '../components/DashCardItem';
import { useNavigate } from "react-router-dom";
import { isLogin, logout } from '../helper';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Dashboard=()=>{
    const [allTask, setAllTask] = useState([]);
    const[todo,setTodo] = useState([]);
    const[completed,setCompleted] = useState([]);
    const[deleted,setDeleted] = useState([]);
    const[inprogress,setInprogress] = useState([]);
    const[overdue,setOverdue] = useState([]);
    const styles ={
        taskWrapper:{
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            
        },
        task:{
            color:LightColors.secondaryBlack,
            fontSize:'25px',
            fontWeight:600,
            marginBottom:'10px',
            marginTop:'10px',
        },
        viewAll:{
            color:LightColors.primary,
            fontSize:'16px',
            fontWeight:600,
            marginBottom:'10px',
            marginTop:'10px',
        },
        dashBoardWrapper:{
            display:'flex',
            flexWrap:'wrap',
            gap:'15px',
            marginBottom:'10px',
        },
        createTask:{
            width: '100%',
            fontSize: '22px',
            padding: '10px',
            border: 'none',
            borderRadius: '15px',
            marginTop: '5px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            cursor: 'pointer',
            
        }

    };
    const navigate=useNavigate();
    const Handler=()=>{
        navigate('/CreateTask')
    }
    const apiCall = async()=>{
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
              setAllTask(result.data);
            } else {
                toast.error(result.message, {
                    position: "top-right"
                  });
            }
            
        } catch(e){
           console.log("message error",)
           if(e.response.status === 401){
                logout();
                navigate("/login");
           } else {
            toast.error(e.response.data.message, {
                position: "top-right"
              });
           }

           
        }
      
    }
    useEffect(()=>{
       
        if(!isLogin()){
            navigate("/login");
        } else 
        {
            apiCall();
        }

      
    },[navigate])

    useEffect(()=>{
            if(allTask.length > 0){
                const todo = allTask.filter(item => item.taskStatus === "todo" && !item.isDeleted)
                setTodo(todo);
                const inprogress = allTask.filter(item => item.taskStatus === "inprogress" && !item.isDeleted)
                setInprogress(inprogress);
                const completed = allTask.filter(item => item.taskStatus === "completed" && !item.isDeleted)
                setCompleted(completed);
                const deleted = allTask.filter(item => item.isDeleted === true)
                setDeleted(deleted);

                const date = new Date();
                const overdue = allTask.filter(item => item.taskStatus === "inprogress" && !item.isDeleted && new Date(item.endDate) < date);
                setOverdue(overdue);
            }
    },[allTask]);
    
    return (
        <MainPage>
            <DashBoardHeader/>
            <BannerSection  title="Make plan to get things done!"  details="All in one place to mange your task  efficiently." bgColor={LightColors.primary} color={LightColors.white}/>
            <div style={styles.taskWrapper}>
                <p style={styles.task}>Tasks</p>
                <p style={styles.viewAll}>View all 30 task.</p>
            </div>
            <div style={styles.dashBoardWrapper}>
                <DashBoardCard  title="Todo" taskType="todo" count={todo ? todo.length : 0} primaryColor={LightColors.primary} />
                <DashBoardCard  title="In Progress" taskType="inprogress" count={inprogress ? inprogress.length : 0} primaryColor={LightColors.warning} />
                <DashBoardCard  title="Completed" taskType="completed" count={completed ? completed.length : 0} primaryColor={LightColors.success} />
                <DashBoardCard  title="Overdue" taskType="overdue" count={overdue ? overdue.length : 0} primaryColor={LightColors.danger} />
                <DashBoardCard  title="Deleted" taskType="deleted" count={deleted ? deleted.length : 0} primaryColor={LightColors.secondaryBlack} />
            </div>
            <div>
                <button onClick={()=>{Handler()}} style={styles.createTask}>Create Task</button>
            </div>
        </MainPage>
    )
}