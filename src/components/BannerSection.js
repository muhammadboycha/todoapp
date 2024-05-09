import React from "react";


export const BannerSection=({title,subTitle,details,bgColor,color})=>{
    const styles={
        mainContainer: {
            backgroundColor:bgColor,
            padding:'15px',
            borderRadius:'15px'
        },
        title:{
            color:color,
            fontWeight: 'bold',
            fontSize: '24px',
            margin:'0px'
            
        },
        subTitle:{
            marginTop:'5px',
            color:color,
            fontWeight: 'lighter',
            fontSize: '15px',
        },
        details:{
            color:color,
            fontSize:'16px',
            fontWeight: 'normal',
            marginBottom:'0px',
            marginTop:'25px',
        }
    }
    return (
       <div style={styles.mainContainer}>
       <p style={styles.title}>{title}</p>
       <p style={styles.subTitle}>{subTitle}</p>
       <p style={styles.details}>{details}</p>
        </div>
    )
}
