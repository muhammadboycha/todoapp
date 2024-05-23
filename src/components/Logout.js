import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { YesNoModal } from "./YesNoModel";
import { LightColors } from "../constant/colors";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export const Logout = ({children})=>{
        const [showModal, setShowModal] = useState(false);
        const navigate=useNavigate();
       
        const handleYes = () => {
          localStorage.removeItem("user");
          navigate('/login')
        };
      
        const handleNo = () => {
          setShowModal(false);
        };
      
        const showYesNoModal = ()=>{
            setShowModal(true)
        };

        const styles = {
            delete: {
                color: LightColors.danger,
                boxShadow:'rgba(0, 0, 0, 1) 0px 0px 17px -9px',
                cursor: "pointer",
              },
              wrapper:{
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
                gap: "10px",
                cursor: "pointer",
                padding: "10px 15px",

              }
        }
      

    return <span style={styles.wrapper} onClick={()=>showYesNoModal()} >
        {showModal && <YesNoModal onYes={handleYes} onNo={handleNo} text="Are you sure you want to logout?"/>}
    {children ? children:""}
    <FontAwesomeIcon style={styles.delete} icon={faPowerOff} />
    </span>
}