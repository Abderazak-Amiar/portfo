import React from "react"
import { Link } from "react-router-dom"
function DataList(props) {

    function deleteSkill(){
        props.delete(props.skill._id)
      }
      // function editSkill(){
      //   props.editSkill(props.skill._id)
      // }
   

  return (
      <div
        to={props.skill.link}
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
        aria-current="true"
      >
        <i className={props.skill.icon}></i>
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">{props.skill.title}</h6>
            <p className="mb-0 opacity-75">{props.skill.content}</p>
          </div>
        </div>
        <button
          // onClick={editSkill}
          className="btn btn-outline-success m-1"
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button
          onClick={deleteSkill}
          className="btn btn-outline-danger m-1"
          id={props.skill._id}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
      
  
  )
}

export default DataList
