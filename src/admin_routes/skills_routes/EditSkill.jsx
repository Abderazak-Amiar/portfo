import React, { useEffect, useState } from "react"
import axios from "axios"
import { Form, useLocation } from "react-router-dom"

function EditSkill() {

console.log("=====>");

  const location = useLocation()
  const [newSkill, setNewSkill] = useState() 
  const [skill, setSkill] = useState({title:"", content:"", link:"", icon:""}) 
   const skillID = location.state.id;
  const API_URL = process.env.REACT_APP_API_URL
 

    useEffect(()=>{

        axios.get(API_URL+"skill/"+skillID).then(res=>{
        
            setSkill(res.data)
          }).catch(err=>{
            console.log(err);
          })


    },[])
   

    console.log(skill);


 
    // axios.patch("http://localhost:3001/skill/"+id, newSkill , {headers : {"Content-Type" :"application/x-www-form-urlencoded"}}).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // });
  
function handleChange(){

}

  
  return (
    <div className="pt-5 mt-5">
      <div className="text-start">
        <h3>
          <i className="bi bi-plus-square"></i> ADD NEW SKILLS
        </h3>
      </div>
      <hr></hr>

      <Form method="post" action="/admin/skills/addskills">
        <div className="form-group">
          <div className="row mb-3 flex-column">
            <div className="col-md-6">
              <label htmlFor="skillTitle">Title</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="title"
                id="skillTitle"
                value={skill.title}
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
                value={skill.icon}
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
                value={skill.link}
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
                 value={skill.content}
                 onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-primary btnContactHeader px-2">
            <i className="bi bi-pencil"></i> Edit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default EditSkill
