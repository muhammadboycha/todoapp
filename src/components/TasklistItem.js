import React from "react";
import { LightColors } from "../constant/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDateOnly } from "../helper";

export const TaskListItem = ({ taskData, taskType, bgColors }) => {
  const date = new Date();
  const overdue = taskData.taskStatus === "inprogress" && new Date(taskData.endDate) < date;

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      borderRadius: "15px",
      marginTop: "20px",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 18px -12px",
      borderLeft: `5px solid ${taskData.taskStatus === "todo" ? LightColors.primary : taskData.taskStatus === "inprogress" ? LightColors.warning : taskData.taskStatus === "completed" ? LightColors.success : taskData.isDeleted === true ? LightColors.secondaryBlack : overdue ? LightColors.danger : bgColors  }`,
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
    endDate:{
      display: "flex",
      gap: "10px",
      margin: "0px",
      fontSize: "14px",
      color: LightColors.danger,
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
  
  const {taskDetails:title,createdAt:createDate, endDate=""} = taskData;
  const handler=()=>{
    console.log('task',taskType)
    const data = {
      color:bgColors,
      data:taskData,
      taskType
   }
   if(taskType === "Todo"){
    navigate('/startTask', { state: data })
   } else if(taskType === "In Progress") {
    navigate('/ChangeTaskStatus', { state: data })
   }else {
    navigate('/ViewTaskDetails', { state: data })
   }
    
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
        {endDate && 
          <div>
            <p style={styles.endDate}>{formatDateOnly(endDate)}</p>
          </div>
        }
      </div>
    </div>
  );
};
