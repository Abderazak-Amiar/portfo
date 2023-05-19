import React, {useState} from "react"
import axios from "axios"
import { useLoaderData, useNavigate, useLocation} from "react-router-dom"
import DataList from "../../components/DataList"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {toastOptions} from "../../utils/toastOptions";
import EditSkill from "./EditSkill";

function SkillsList() {
  const location = useLocation()
  const API_URL = process.env.REACT_APP_API_URL;
  const [newSkill, setNewSkill] = useState();
  const skills = useLoaderData();
  const navigate = useNavigate();

  function deleteSkill(id){

     axios.delete(API_URL+"skill/"+id).then(res => {
   
        navigate("/admin/skills/skillsList");
        toast.success("Deleted Successfully !", toastOptions.toastConfig);
  })
    .catch(err=>{
      console.log(err);
    })
   
  }
  function editSkill(id){
    console.log("===$");
    navigate("/admin/skills/editSkill/"+id,{state:{id:id}});
  }
  //COMPONENT Confirm Deletion
  const ConfirmDeletion = ({closeToast, id}) => (
    <div>
      
      <h5>Confirm ?</h5>
      <div className="d-flex justify-content-around">
      <button className="btn btn-outline-danger" onClick={()=> {deleteSkill(id)} }>YES</button>
      <button className="btn btn-outline-success" onClick={closeToast}>NO</button>
    </div>
    </div>
    
  )
    //COMPONENT Confirm Edit
  const ConfirmEdit = ({closeToast, id}) => (
    <div>
      
      <h5>Confirm ?</h5>
      <div className="d-flex justify-content-around">
      <button className="btn btn-outline-danger" onClick={()=> {editSkill(id)} }>YES</button>
      <button className="btn btn-outline-success" onClick={closeToast}>NO</button>
    </div>
    </div>
    
  )
  
  function confirmDeletion(id){

    toast.warning(<ConfirmDeletion id={id} />, toastOptions.toastConfirm); 

  }

  function confirmEdit(id){

    toast.warning(<ConfirmEdit id={id} />, toastOptions.toastConfirm); 

  }
 
  return (
    <div className="list-group">
    
    <ToastContainer />
      {skills.map((skill) => <DataList  key={skill._id} data = {skill} delete={confirmDeletion} editSkill={confirmEdit}/> )}
    </div>
  )
}

export const skillsLoader = async () => {
  const API_URL = process.env.REACT_APP_API_URL
  const res = await axios.get(API_URL+"skill")
  //  console.log("===>",res.json());
  return res.data
}

export default SkillsList
