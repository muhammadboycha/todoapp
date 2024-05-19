import React from 'react';
import { MainPage } from './MainPage';
import { DashBoardHeader } from '../components/DashBoardHeader';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { DashBoardCard } from '../components/DashCardItem';
import { useNavigate } from "react-router-dom";

export const Dashboard=()=>{
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
            
        }

    };
    const navigate=useNavigate();
    const Handler=()=>{
        navigate('/CreateTask')
    }
    
    return (
        <MainPage>
            <DashBoardHeader/>
            <BannerSection  title="Make plan to get things done!"  details="All in one place to mange your task  efficiently." bgColor={LightColors.primary} color={LightColors.white}/>
            <div style={styles.taskWrapper}>
                <p style={styles.task}>Tasks</p>
                <p style={styles.viewAll}>View all 30 task.</p>
            </div>
            <div style={styles.dashBoardWrapper}>
                <DashBoardCard  title="Todo" count="5" primaryColor={LightColors.primary} />
                <DashBoardCard  title="In Progress" count="9" primaryColor={LightColors.warning} />
                <DashBoardCard  title="Completed" count="6" primaryColor={LightColors.success} />
                <DashBoardCard  title="OverDue" count="8" primaryColor={LightColors.danger} />
                <DashBoardCard  title="Delete" count="10" primaryColor={LightColors.secondaryBlack} />
            </div>
            <div>
                <button onClick={()=>{Handler()}} style={styles.createTask}>Create Task</button>
            </div>
        </MainPage>
    )
}