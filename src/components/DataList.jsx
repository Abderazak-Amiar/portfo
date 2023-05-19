import React from "react"
import { Link } from "react-router-dom"
function DataList(props) {
  function deleteSkill() {
    props.delete(props.data._id)
  }
  function editSkill() {
    props.editSkill(props.data._id)
  }

  return (
    <div
      to={props.data.link}
      className="list-group-item list-group-item-action d-flex gap-3 py-3"
      aria-current="true"
    >
      <i className={props.data.icon}></i>
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">{props.data.title}</h6>
          <p className="mb-0 opacity-75">{props.data.content}</p>
        </div>
      </div>
      <button onClick={editSkill} className="btn btn-outline-success m-1">
        <i className="bi bi-pencil"></i>
      </button>
      <button
        onClick={deleteSkill}
        className="btn btn-outline-danger m-1"
        id={props.data._id}
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  )
}

export default DataList
