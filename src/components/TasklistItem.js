import React from "react";
import { LightColors } from "../constant/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { useNavigate } from "react-router-dom";

export const TaskListItem = ({ title, createDate, bgColors }) => {
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
  const handler=()=>{
    navigate('/ViewTaskDetails')
  }
  return (
    <div onClick={()=>{handler()}} style={styles.mainContainer}>
      <p style={styles.ptag}>{title}</p>
      <div style={styles.dateIcon}>
        <div>
          <p style={styles.icons}>{createDate}</p>
        </div>
        <div>
          <p style={styles.icons}>
            <FontAwesomeIcon style={styles.edit} icon={faPen} />
            <FontAwesomeIcon style={styles.delete} icon={faTrashCan} />
          </p>
        </div>
      </div>
    </div>
  );
};
