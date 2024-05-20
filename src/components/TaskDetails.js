import React from "react";
import { LightColors } from "../constant/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { formatDate, formatDateOnly } from "../helper";
import { useNavigate } from "react-router-dom";
import { YesNoModal } from "./YesNoModel";
import { DeleteTask } from "./DeleteTask";

export const TaskDetails = ({ taskData, bgColors }) => {
  const navigate=useNavigate();
  const {taskDetails:title, createdAt: createDate, endDate , isDeleted} = taskData;
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      borderRadius: "15px",
      marginTop: "20px",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 18px -12px",
      borderLeft: `5px solid ${bgColors}`,
    },
    dateIcon: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0px 0px",
    },
    icons: {
      display: "flex",
      gap: "10px",
      margin: "0px",
      fontSize: "14px",
      color: LightColors.gray,
    },
    ptag: {
      margin: "0px",
      padding: "10px 0px 15px",
      fontSize: "16px",
      color: LightColors.gray,
    },
    edit: {
      color: LightColors.primary,
      cursor: "pointer",
    },
    endDate:{
      display: "flex",
      gap: "10px",
      margin: "0px",
      fontSize: "14px",
      color: LightColors.danger,
    }
  };
  const editTask = ()=>{
    const data = {
      taskData
   }
    navigate('/updateTask', { state: data })
  }
 
  return (
    <div style={styles.mainContainer}>
      <p style={styles.ptag}>{title}</p>
      <div style={styles.dateIcon}>
        <div>
          <p style={styles.icons}>{formatDate(createDate)}</p>
        </div>
        {endDate && 
          <div>
            <p style={styles.endDate}>{formatDateOnly(endDate)}</p>
          </div>
        }
        {isDeleted ? "": <div>
            <p style={styles.icons}>
              <FontAwesomeIcon style={styles.edit} icon={faPen} onClick={()=>editTask()}/>
              <DeleteTask taskData={taskData}/>
            </p>
          </div>}
       
      </div>
    </div>
  );
};
