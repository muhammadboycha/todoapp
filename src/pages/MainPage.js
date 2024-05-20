import { LightColors } from "../constant/colors";
export const MainPage=({children})=>{
    
    const styles={
        mainPage:{
            backgroundColor: LightColors.white,
            width:'100%',
            height:'100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        container:{
            borderRadius:'15px',
            width:'30%',
            minHeight:'90vh',
            maxHeight:'90vh',
            boxShadow:'rgba(0, 0, 0, 1) 0px 0px 17px -9px',
            padding:'15px',
            overflowY:'auto',
            position: 'relative',
        }
    }
    return(
        <div style={styles.mainPage} >
           <div style={styles.container} className="MainPageContainer">
                    {children}
            </div>
        </div>
    )
}