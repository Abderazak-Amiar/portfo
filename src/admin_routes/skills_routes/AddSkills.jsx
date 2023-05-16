import React from "react"
import {Form} from "react-router-dom"
import axios from "axios"
function AddSkills() {
 
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
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillIcon">Bootstrap/FontAwsome Icon</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="icon"
                id="skillIcon"
                placeholder="e.g. : bi bi-bootstrap / fa-solid fa-font-awesome"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillLink">Link</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="link"
                id="skillLink"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="skillDescription">Description</label>
              <textarea
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="content"
                id="skillDescription"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-primary btnContactHeader px-2"
          >
            <i className="bi bi-plus-circle"></i> ADD
          </button>
        </div>
      </Form>
    </div>
  )

 
}

export const sendSkill = async({request}) => {

const data = await request.formData();

const submission = {
  title : data.get('title'),
  content : data.get('content'),
  link : data.get('link'),
  icon : data.get('icon'),
}
//SEND SKILL TO THE API
axios.post("http://localhost:3001/skill", submission, {headers : {"Content-Type" :"application/x-www-form-urlencoded"}}).then(res =>{
  console.log("===> Skill ADDED successfully !", res);
}).catch(err=>{
  console.log("===>",err);
})
  console.log("===>",submission);
  return submission
}

export default AddSkills
