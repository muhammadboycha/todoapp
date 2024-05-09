import React from 'react';
import { Image } from '../components/Image';
import { MainPage } from './MainPage';
import Login from '../assets/images/signup.svg'
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { UserForm } from '../components/UserForm';
export const CreateAccount=()=>{
    const styles ={
        imageWrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            
        }
    }
    return (
        <div className='maincontainer'>
            <MainPage>
                <div style={styles.imageWrapper}>
                <Image  src={Login} height="200px" width="200px"/>
                </div>
                <BannerSection title="Make plan to get things done!" subTitle="You are almost there" details="All in one place to mange your task  efficiently." bgColor={LightColors.primary} color={LightColors.white}/>
                <UserForm/>
            </MainPage>
            

        </div>
    )
}