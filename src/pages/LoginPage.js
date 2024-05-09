import React from 'react';
import { MainPage } from './MainPage';
import LoginImage from '../assets/images/Login.svg';
import { Image } from '../components/Image';
import { LoginForm } from '../components/LoginForm';

export const Login=()=>{
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
            <Image  src={LoginImage} height="200px" width="200px"/>
            </div>
            <LoginForm/>
        </MainPage>
     </div>
    )
}