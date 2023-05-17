import React, {useState} from "react"
import axios from "axios"
import { useLoaderData, useNavigate} from "react-router-dom"
import DataList from "../../components/DataList"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function SkillsList() {
  const toastConfirm = {
    position: "top-right",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    const toastOption = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }
  const skills = useLoaderData()
  const navigate = useNavigate();

  function deleteSkill(id){

     axios.delete("http://localhost:3001/skill/"+id).then(res => {
   
        navigate("/admin/skills/skillsList");
        toast.success("Deleted Successfully !", toastOption);
  })
    .catch(err=>{
      console.log(err);
    })
   
  }
  
  const Msg = ({closeToast, id}) => (
    <div>
      
      <h5>Confirm ?</h5>
      <div className="d-flex justify-content-around">
      <button className="btn btn-outline-danger" onClick={()=> {deleteSkill(id)} }>YES</button>
      <button className="btn btn-outline-success" onClick={closeToast}>NO</button>
    </div>
    </div>
    
  )

  function confirmDeletion(id){

    toast.warning(<Msg id={id} />, toastConfirm); 

  }
  // function editSkill(id){
    
  //   axios.patch("http://localhost:3001/skill/"+id, skillEdited , {headers : {"Content-Type" :"application/x-www-form-urlencoded"}}).then(res=>{
  //     console.log(res);
  //   }).catch(err=>{
  //     console.log(err);
  //   });

  // }
  

  return (
    <div className="list-group">
    <ToastContainer />
      {skills.map((skill) => <DataList  key={skill._id} skill = {skill} delete={confirmDeletion}/> )}
    </div>
  )
}

export const skillsLoader = async () => {
  const res = await axios.get("http://localhost:3001/skill")
  //  console.log("===>",res.json());
  return res.data
}

export default SkillsList
