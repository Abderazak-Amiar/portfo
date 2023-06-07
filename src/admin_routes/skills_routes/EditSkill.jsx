import React, { useEffect, useState } from "react"
import axios from "axios"
import { Form, useLocation, useNavigate } from "react-router-dom"
function EditSkill() {

  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const location = useLocation()
  const navigate = useNavigate()
  const [skill, setSkill] = useState({title:"", content:"", link:"", icon:""}) 
  const skillID = location.state.id;
 

    useEffect(()=>{

        axiosInstance.get("skill/"+skillID).then(res=>{
        
            setSkill(res.data)

          }).catch(err=>{
            console.log(err);
          })


    },[])
   
  
function handleChange(event){

const {name, value} = event.target;
if(name === "title"){
  setSkill({...skill, title : value});
}else if(name === "content"){
  setSkill({...skill, content : value});

}else if(name === "icon"){
  setSkill({...skill, icon : value});

}else if(name === "link"){
  setSkill({...skill, link : value});

}
}

function sendNewSkill(){

  const token = localStorage.getItem('accessToken')

  axiosInstance.patch("skill/"+skill._id, skill , {headers : {"Content-Type" :"application/x-www-form-urlencoded", "Authorization" : `Bearer ${token}`}}).then(res=>{
      console.log(res);     
    }).catch(err=>{
      console.log(err);
    });
}

  return (
    <div className="pt-5 mt-5">
      <div className="text-start">
        <h3>
          <i className="bi bi-plus-square"></i> ADD NEW SKILLS
        </h3>
      </div>
      <hr></hr>

      
        <div className="form-group">
          <div className="row mb-3 flex-column">
            <div className="col-md-6">
              <label htmlFor="skillTitle">Title</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="title"
                id="skillTitle"
                defaultValue={skill.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillIcon">Bootstrap/FontAwsome class Icon</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="icon"
                id="skillIcon"
                placeholder="e.g. : bi bi-bootstrap / fa-solid fa-font-awesome"
                defaultValue={skill.icon}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillLink">Link</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="link"
                id="skillLink"
                defaultValue={skill.link}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillDescription">Description</label>
              <textarea
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="content"
                id="skillDescription"
                defaultValue={skill.content}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={sendNewSkill} className="btn btn-outline-primary btnContactHeader px-2">
            <i className="bi bi-pencil"></i> Edit
          </button>
        </div>
     
    </div>
  )
}

export default EditSkill
