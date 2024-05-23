import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { YesNoModal } from "./YesNoModel";
import { LightColors } from "../constant/colors";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { envConstant } from "../envConstant";

export const DeleteTask = ({taskData, taskType, bgColors })=>{
        const [showModal, setShowModal] = useState(false);
        const navigate=useNavigate();
        const apiCall = async()=>{
            try{
                const userData = JSON.parse(localStorage.getItem('user'));
        
                let result = await axios.post(`${envConstant.apiUrl}/deleteTask`,{id:taskData._id}, {
                    headers: {
                        token: userData.token
                    }
                    });
                result = result.data
                if(result.data){
                    setShowModal(false);
                    toast.success(result.data.message, {
                        position: "top-right"
                      });
                      let data;
                      if(taskType === "Todo"){
                        data = {
                         color:LightColors.primary,
                         title:"Todo",
                         taskType:"todo" 
                       }
                      } else if(taskType === "In Progress") {
                       data = {
                         color:LightColors.warning,
                         title:"In Progress",
                          taskType:"inprogress" 
                       }
                     } else if(taskType === "Completed"){
                      data = {
                        color:LightColors.success,
                        title:"Completed",
                         taskType:"completed" 
                      }
                     } else {
                      data = {
                        color:LightColors.danger,
                        title:"Overdue",
                         taskType:"overdue" 
                      }
                     }
                   
                     navigate('/ViewTaskList', { state: data })
                } else {
                    toast.error(result.message, {
                        position: "top-right"
                      });
                }
                
            } catch(e){
        
                toast.error(e.message, {
                    position: "top-right"
                  });
            }
          }

        const handleYes = () => {
          if(taskData._id){
            apiCall()
          }
        };
      
        const handleNo = () => {
          setShowModal(false);
          // Add your No handling logic here
        };
      
        const showYesNoModal = ()=>{
            setShowModal(true)
        };

        const styles = {
            delete: {
                color: LightColors.danger,
                boxShadow:'rgba(0, 0, 0, 1) 0px 0px 17px -9px',
                cursor: "pointer",
                fontSize: "16px"
              },
        }
      

    return <>
        {showModal && <YesNoModal onYes={handleYes} onNo={handleNo} text="Are you sure you want to proceed?"/>}
    <FontAwesomeIcon style={styles.delete} onClick={()=>showYesNoModal()} icon={faTrashCan} />
    </>
}