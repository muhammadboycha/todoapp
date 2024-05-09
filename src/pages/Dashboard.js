import React from 'react';
import { MainPage } from './MainPage';
import { DashBoardHeader } from '../components/DashBoardHeader';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { DashBoardCard } from '../components/DashCardItem';

export const Dashboard=()=>{
    const styles ={
        taskWrapper:{
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'center'
        },
        task:{
            color:LightColors.secondaryBlack,
            fontSize:'25px',
            fontWeight:600,
        },
        viewAll:{
            color:LightColors.primary,
            fontSize:'16px',
            fontWeight:600,
        },
        dashBoardWrapper:{
            display:'flex',
            flexWrap:'wrap',
            gap:'15px'
        },
        createTask:{
            width: '100%',
            fontSize: '22px',
            padding: '10px',
            border: 'none',
            borderRadius: '15px',
            marginTop: '35px',
            fontFamily:'Roboto',
            color: 'white',
            backgroundColor:LightColors.primary,
            marginBottom:'20px'
        }

    }
    return (
        <MainPage>
            <DashBoardHeader/>
            <BannerSection  title="Make plan to get things done!" subTitle="You are almost there" details="All in one place to mange your task  efficiently." bgColor={LightColors.primary} color={LightColors.white}/>
            <div style={styles.taskWrapper}>
                <p style={styles.task}>Tasks</p>
                <p style={styles.viewAll}>View all 30 task.</p>
            </div>
            <div style={styles.dashBoardWrapper}>
                <DashBoardCard title="Todo" count="5" primaryColor={LightColors.primary} />
                <DashBoardCard title="In Progress" count="9" primaryColor={LightColors.warning} />
                <DashBoardCard title="Completed" count="6" primaryColor={LightColors.success} />
                <DashBoardCard title="OverDue" count="8" primaryColor={LightColors.danger} />
                <DashBoardCard title="Delete" count="10" primaryColor={LightColors.secondaryBlack} />
            </div>
            <div>
                <button style={styles.createTask}>Create Task</button>
            </div>
        </MainPage>
    )
}