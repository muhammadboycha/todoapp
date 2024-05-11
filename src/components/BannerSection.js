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
            marginTop:'15px',
        }
    }
    return (
       <div style={styles.mainContainer}>
        {title &&
            <p style={styles.title}>{title}</p>
        }
        {subTitle &&
            <p style={styles.subTitle}>{subTitle}</p>
        }
        {details &&
            <p style={styles.details}>{details}</p>
        }
        </div>
    )
}
