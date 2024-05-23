import React, { useEffect } from 'react';
import { Image } from '../components/Image';
import { MainPage } from './MainPage';
import Login from '../assets/images/signup.svg'
import { BannerSection } from '../components/BannerSection';
import { LightColors } from '../constant/colors';
import { UserForm } from '../components/UserForm';
import { isLogin } from '../helper';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm';
export const ForgotPassword=()=>{
    const styles ={
        imageWrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            
        }
    }
    const navigate=useNavigate();
    useEffect(()=>{
        if(isLogin()){
            navigate("/dashboard");
        }
    },[navigate])

    return (
        <div className='maincontainer'>
            <MainPage>
                <div style={styles.imageWrapper}>
                <Image  src={Login} height="200px" width="200px"/>
                </div>
                <BannerSection title="Make plan to get things done!" subTitle="You are almost there" details="All in one place to mange your task  efficiently." bgColor={LightColors.primary} color={LightColors.white}/>
                <ForgotPasswordForm/>
            </MainPage>
            

        </div>
    )
}