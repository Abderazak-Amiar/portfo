import React, { useState } from "react"
import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom"
import DataListPortfolio from "../../components/DataListPortfolio"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function PortfolioList() {
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
  const portfolios = useLoaderData()
  console.log("====>", portfolios)
  const navigate = useNavigate()

  function deletePortfolio(id) {
    axios
      .delete("http://localhost:3001/portfolio/" + id)
      .then((res) => {
        navigate("/admin/portfolio/portfolioList")
        toast.success("Deleted Successfully !", toastOption)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const Msg = ({ closeToast, id }) => (
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
    toast.warning(<Msg id={id} />, toastConfirm)
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
      {portfolios.map((portfolio) => (
        <DataListPortfolio
          key={portfolio._id}
          data={portfolio}
          delete={confirmDeletion}
        />
      ))}
    </div>
  )
}

export const portfolioLoader = async () => {
  const res = await axios.get("http://localhost:3001/portfolio")
  //  console.log("===>",res.json());
  return res.data
}

export default PortfolioList
