import React from "react";
import { LightColors } from "../constant/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../helper";

export const TaskListItem = ({ taskData, taskType, bgColors }) => {
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      borderRadius: "15px",
      marginTop: "20px",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 18px -12px",
      borderLeft: `5px solid ${bgColors}`,
      cursor: "pointer"
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
    },
    delete: {
      color: LightColors.danger,
    },
  };
  const navigate=useNavigate();
  
  const {taskDetails:title,createdAt:createDate} = taskData;
  const handler=()=>{
    console.log('task',taskType)
    const data = {
      color:bgColors,
      data:taskData,
      taskType
   }
    navigate('/ViewTaskDetails', { state: data })
   
  }
  const editTask = ()=>{
    const data = {
      taskData
   }
    navigate('/updateTask', { state: data })
  }

  return (
    <div onClick={()=>{handler()}} style={styles.mainContainer}>
      <p style={styles.ptag}>{title}</p>
      <div style={styles.dateIcon}>
        <div>
          <p style={styles.icons}>{formatDate(createDate)}</p>
        </div>
        <div>
          <p style={styles.icons}>
            <FontAwesomeIcon style={styles.edit} icon={faPen} onClick={()=>editTask()} />
            <FontAwesomeIcon style={styles.delete} icon={faTrashCan} />
          </p>
        </div>
      </div>
    </div>
  );
};
