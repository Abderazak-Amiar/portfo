import React, { useState } from "react"
import { Form } from "react-router-dom"
import axios from "axios"

function AddPortfolio() {
  
  const [image, setImage] = useState()

  function handleUpload(event) {
    const file = event.target.files[0]
    setImage(file)
  }

  function uploadFile() {

    const file = new FormData()
    file.append("image", image)
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
    axiosInstance
      .post("upload", file, {
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
          <i className="bi bi-plus-square"></i> ADD NEW PORTFOLIO
        </h3>
      </div>
      <hr></hr>

      <Form method="post" action="/admin/portfolio/addportfolio">
        <div className="form-group">
          <div className="row mb-3 flex-column">
            <div className="col-md-6">
              <label htmlFor="portfolioTitle">Title</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="title"
                id="portfolioTitle"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="portfolioLink">Link</label>
              <input
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="link"
                id="portfolioLink"
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
              <label htmlFor="portfolioDescription">Description</label>
              <textarea
                type="text"
                className="form-control  mt-2 styleInputFormContact"
                name="content"
                id="portfolioDescription"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={uploadFile}
            className="btn btn-outline-primary btnContactHeader px-2"
          >
            <i className="bi bi-plus-circle"></i> ADD
          </button>
        </div>
      </Form>
    </div>
  )
}
export const sendPortfolio = async ({ request }) => {
  const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })

  const data = await request.formData()

  const submission = {
    title: data.get("title"),
    content: data.get("content"),
    link: data.get("link"),
    image: data.get("image"),
  }
  //SEND SKILL TO THE API
  axiosInstance
    .post("portfolio", submission, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    .then((res) => {
      console.log("===> PORTFOLIO ADDED successfully !")
    })
    .catch((err) => {
      console.log("===>", err)
    })
  //UPLOAD IMAGE

  console.log("===>", submission)
  return submission
}

export default AddPortfolio
