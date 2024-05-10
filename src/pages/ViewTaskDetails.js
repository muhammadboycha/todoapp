import React from 'react';
import { MainPage } from './MainPage';
import { NavBar } from '../components/NavBar';
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { TodoListItem } from '../components/TodoListItem';
export const ViewTaskDetails=()=>{
    return (
        <MainPage>
            <NavBar/>
            <BannerSection title="Todo task list" details="You have 20 task." bgColor={LightColors.primary} color={LightColors.secondaryWhite}/>
            <TodoListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TodoListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TodoListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
            <TodoListItem title="This is your task" createDate="Created:20/05/2024" bgColors={LightColors.primary}/>
        </MainPage>
    )
}