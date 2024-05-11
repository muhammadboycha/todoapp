import React from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TaskListItem } from '../components/TasklistItem';
export const ViewTaskList=()=>{
    return (
        <MainPage>
             <NavBar/>
            <BannerSection title="Todo task list" details="You have 20 task." bgColor={LightColors.primary} color={LightColors.secondaryWhite}/>
            <TaskListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TaskListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TaskListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TaskListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
        </MainPage>
    )
}