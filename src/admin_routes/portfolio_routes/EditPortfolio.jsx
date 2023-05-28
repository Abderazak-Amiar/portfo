import React, { useEffect, useState } from "react"
import axios from "axios"
import {useLocation} from "react-router-dom"
function EditPortfolio() {

  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  const [image, setImage] = useState()
  const location = useLocation()
  const [portfolio, setportfolio] = useState({
    title: "",
    content: "",
    link: "",
    image: "",
  })
  const portfolioID = location.state.id

  useEffect(() => {
    axiosInstance
      .get("portfolio/" + portfolioID)
      .then((res) => {
        setportfolio(res.data)
        console.log("===>",res);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    if (name === "title") {
      setportfolio({ ...portfolio, title: value })
    } else if (name === "content") {
      setportfolio({ ...portfolio, content: value })
    } else if (name === "image") {
      setportfolio({ ...portfolio, image: value })
    } else if (name === "link") {
      setportfolio({ ...portfolio, link: value })
    }
  }

  function sendNewportfolio() {
    axiosInstance
      .patch("portfolio/" + portfolio._id, portfolio, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleUpload(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  function uploadFile(id) {
    const file = new FormData()
    file.append("image", image);
    file.append("id_profile", id)

    axiosInstance
      .post(process.env.REACT_APP_API_URL+"upload", file, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("===> Image Uploaded successfuly !", res)
      })
      .catch((err) => {
        console.log("===>", err)
      })
  }

  return (
    <div className="pt-5 mt-5">
      <div className="text-start">
        <h3>
          <i className="bi bi-plus-square"></i> ADD NEW portfolioS
        </h3>
      </div>
      <hr></hr>

      <div className="form-group">
        <div className="row mb-3 flex-column">
          <div className="col-md-6">
            <label htmlFor="portfolioTitle">Title</label>
            <input
              type="text"
              className="form-control  mt-2 styleInputFormContact"
              name="title"
              id="portfolioTitle"
              defaultValue={portfolio.title}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="portfolioImage">Image</label>
            <input
              type="file"
              className="form-control  mt-2 styleInputFormContact"
              name="image"
              id="portfolioImage"
              onChange={handleUpload}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="portfolioLink">Link</label>
            <input
              type="text"
              className="form-control  mt-2 styleInputFormContact"
              name="link"
              id="portfolioLink"
              defaultValue={portfolio.link}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="portfolioDescription">Description</label>
            <textarea
              type="text"
              className="form-control  mt-2 styleInputFormContact"
              name="content"
              id="portfolioDescription"
              defaultValue={portfolio.content}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={()=>{uploadFile(portfolioID); sendNewportfolio()}}
          className="btn btn-outline-primary btnContactHeader px-2"
        >
          <i className="bi bi-pencil"></i> Edit
        </button>
      </div>
    </div>
  )
}

export default EditPortfolio
