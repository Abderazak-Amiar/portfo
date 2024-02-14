import React, { useState } from 'react'
import axios from 'axios'
import {Form, useNavigate} from "react-router-dom"
function Login() {

  return (
    <main className="form-signin w-100 m-auto">
  <Form method='post' action='/login'>
    <h1 className="h3 mb-3 fw-normal">Login</h1>

    <div className="form-floating">
      <input type="text" name="user" className="form-control" id="floatingInput" placeholder="admin"/>
      <label htmlFor="floatingInput">User</label>
    </div>
    <div className="form-floating">
      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="123"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </Form>
</main>
  )
}
export const sendLogin = async ({ request }) => {
  
    const axiosInstance = axios.create({baseURL : process.env.REACT_APP_API_URL })
  
    const data = await request.formData()
  
    const submission = {
      user: data.get("user"),
      password: data.get("password"),
    
    }
    //SEND SKILL TO THE API
    axiosInstance
      .post("login", submission, {
        headers: { "Content-Type": "application/x-www-form-urlencoded"},
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken)
      })
      .catch((err) => {
        console.log("===>", err)
      })
    //UPLOAD IMAGE
  
    console.log("===>", submission)
    return submission
  }
export default Login