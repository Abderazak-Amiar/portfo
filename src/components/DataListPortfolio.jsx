import React from "react"
import { Link } from "react-router-dom"
function DataListPortfolio(props) {



    function deletePortfolio(){
        props.delete(props.data._id)
      }
      // function editSkill(){
      //   props.editSkill(props.data._id)
      // }
   

  return (
      <div className="list-group-item list-group-item-action d-flex gap-3 py-3">

      <img id="imageCustomSize"  src={'http://localhost:3001/uploads/images/'+props.data.image} alt="" />
     
     
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">{props.data.title}</h6>
            <p className="mb-0 opacity-75">{props.data.content}</p>
          </div>
        </div>
        <button
          // onClick={editSkill}
          className="btn btn-outline-success m-1"
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button
          onClick={deletePortfolio}
          className="btn btn-outline-danger m-1"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
      
  
  )
}

export default DataListPortfolio
