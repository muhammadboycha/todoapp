import React, { useEffect } from 'react';
import { MainPage } from './MainPage';
import LoginImage from '../assets/images/Login.svg';
import { Image } from '../components/Image';
import { LoginForm } from '../components/LoginForm';
import { isLogin } from '../helper';
import { useNavigate } from 'react-router-dom';

export const Login=()=>{
    const navigate=useNavigate();
    const styles ={
        imageWrapper:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            
        }
    }

    useEffect(()=>{
        if(isLogin()){
            navigate("/dashboard");
        }
    },[navigate])

    return (
        <div className='maincontainer'>
        <MainPage>
            <div style={styles.imageWrapper}>
            <Image  src={LoginImage} height="200px" width="200px"/>
            </div>
            <LoginForm/>
        </MainPage>
     </div>
    )
}