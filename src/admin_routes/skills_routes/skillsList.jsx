import React from "react"
import axios from "axios"
import { useLoaderData, NavLink, Link } from "react-router-dom"
function SkillsList() {
  const skills = useLoaderData()

  console.log("===>", skills)

  return (
    <div className="list-group">
      {skills.map((skill) => (
        <Link
          key={skill._id}
          to={skill.link}
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <i className={skill.icon}></i>
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">{skill.title}</h6>
              <p className="mb-0 opacity-75">{skill.content}</p>
            </div>
            <div>
              <button className="btn btn-outline-success m-1">
                <i class="bi bi-pencil"></i>
              </button>
              <button className="btn btn-outline-danger m-1">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const skillsLoader = async () => {
  const res = await axios.get("http://localhost:3001/skill")
  //  console.log("===>",res.json());
  return res.data
}

export default SkillsList
