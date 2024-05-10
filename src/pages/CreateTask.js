import React from "react";
import { NavBar } from "../components/NavBar";
import { MainPage } from "./MainPage";
import { BannerSection } from "../components/BannerSection";
import { LightColors } from "../constant/colors";
export const CreateTask = () => {
  const styles = {
    main:{
        marginBottom: '230px',
    },
    heading: {
      color: LightColors.secondaryBlack,
      fontSize: "25px",
    },
    inputField: {
      width: 'calc(100% - 17px)',
      paddingTop: "16px",
      paddingBottom: "16px",
      borderRadius: "15px",
      fontSize: "16px",
      border: "0px",
      paddingLeft: "16px",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 18px -12px",
    },
    createBtn: {
      width: "100%",
      fontSize: "22px",
      padding: "10px",
      border: "none",
      borderRadius: "15px",
      marginTop: "35px",
      fontFamily: "Roboto",
      color: "white",
      backgroundColor: LightColors.primary,
      marginBottom: "40px",
    }
  };

  return (
    <MainPage>
      <NavBar />
      <BannerSection
        title="Make plan to get things done!"
        subTitle="You are almost there"
        details="All in one place to mange your task  efficiently."
        bgColor={LightColors.primary}
        color={LightColors.white}
      />
      <div style={styles.main}>
        <h2 style={styles.heading}>Create Task</h2>
        
          <input style={styles.inputField} type="text" placeholder="Please enter your task details" />
        
        <button style={styles.createBtn}>Create</button>
      </div>
    </MainPage>
  );
};
