import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { YesNoModal } from "./YesNoModel";
import { LightColors } from "../constant/colors";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DeleteTask = ({taskData})=>{
        const [showModal, setShowModal] = useState(false);
        const navigate=useNavigate();
        const apiCall = async()=>{
            try{
                const userData = JSON.parse(localStorage.getItem('user'));
        
                let result = await axios.post("http://localhost:3001/deleteTask",{id:taskData._id}, {
                    headers: {
                        token: userData.token
                    }
                    });
                result = result.data
                console.log(result)
                if(result.data){
                    // console.log(result.data);
                    setShowModal(false);
                    toast.success(result.data.message, {
                        position: "top-right"
                      });
                    const data = {
                      color:LightColors.secondaryBlack,
                      type:'deleted' 
                    }
                    navigate('/ViewTaskList', { state: data })
                } else {
                    toast.error(result.message, {
                        position: "top-right"
                      });
                }
                
            } catch(e){
               console.log("message error",e)
        
                toast.error(e.message, {
                    position: "top-right"
                  });
            }
          }

        const handleYes = () => {
          console.log('User clicked Yes',taskData._id);
        
          // Add your Yes handling logic here
          if(taskData._id){
            apiCall()
          }
        };
      
        const handleNo = () => {
          console.log('User clicked No');
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
              },
        }
      

    return <>
        {showModal && <YesNoModal onYes={handleYes} onNo={handleNo} text="Are you sure you want to proceed?"/>}
    <FontAwesomeIcon style={styles.delete} onClick={()=>showYesNoModal()} icon={faTrashCan} />
    </>
}