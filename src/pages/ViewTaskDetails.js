import React from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskDetails } from '../components/TaskDetails';
export const ViewTaskDetails=()=>{
    return (
        <MainPage>
            <NavBar/>
            <BannerSection title="Todo"  bgColor={LightColors.primary} color={LightColors.secondaryWhite}/>
            <TaskDetails title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            
        </MainPage>
    )
}