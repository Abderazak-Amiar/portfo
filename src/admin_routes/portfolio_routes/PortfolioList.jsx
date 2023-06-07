import React, { useState } from "react"
import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom"
import DataListPortfolio from "../../components/DataListPortfolio"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {toastOptions} from "../../utils/toastOptions";

function PortfolioList() {

  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const portfolios = useLoaderData()
  const navigate = useNavigate()

  function deletePortfolio(id) {
    const token = localStorage.getItem('accessToken')
    axiosInstance
      .delete("portfolio/" + id,{headers: {"Authorization" : `Bearer ${token}`}})
      .then((res) => {
        navigate("/admin/portfolio/portfolioList")
        toast.success("Deleted Successfully !", toastOptions.toastConfig)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  function editPortfolio(id){
    console.log("===$");
    navigate("/admin/portfolio/editPortfolio/"+id,{state:{id:id}});
  }
  
  function confirmEdit(id){

    toast.warning(<ConfirmEdit id={id} />, toastOptions.toastConfirm); 

  }
   //COMPONENT Confirm Edit
   const ConfirmEdit = ({closeToast, id}) => (
    <div>
      
      <h5>Confirm ?</h5>
      <div className="d-flex justify-content-around">
      <button className="btn btn-outline-danger" onClick={()=> {editPortfolio(id)} }>YES</button>
      <button className="btn btn-outline-success" onClick={closeToast}>NO</button>
    </div>
    </div>
    
  )
  //CONFIRM DELETION COMPONENT
  const ConfirmDeletion = ({ closeToast, id }) => (
    <div>
      <h5>Confirm ?</h5>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            deletePortfolio(id)
          }}
        >
          YES
        </button>
        <button className="btn btn-outline-success" onClick={closeToast}>
          NO
        </button>
      </div>
    </div>
  )

  function confirmDeletion(id) {
    toast.warning(<ConfirmDeletion id={id} />, toastOptions.toastConfirm)
  }


  return (
    <div className="list-group">
      <ToastContainer />
      {portfolios.map((portfolio) => (
        <DataListPortfolio
          key={portfolio._id}
          data={portfolio}
          delete={confirmDeletion}
          editPortfolio={confirmEdit}
        />
      ))}
    </div>
  )
}

export const portfolioLoader = async () => {
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const res = await axiosInstance.get("portfolio")
  return res.data
}

export default PortfolioList
