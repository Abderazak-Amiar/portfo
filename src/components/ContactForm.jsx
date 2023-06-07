import React, {useState} from "react"
import axios from "axios";
function ContactForm() {
  const [message, setMessage] = useState( {
    fName : "",
    lName : "",
    email : "",
    phone : "",
    object : "",
    message : "",
  });

  function handleChange(event){

      const {name, value} = event.target;
      if(name === "fName"){
        setMessage({ ...message, fName : value});

      }else if(name === "lName"){

        setMessage({ ...message, lName : value});

      }else if(name === "email"){
        setMessage({ ...message, email : value});
      }else if(name === "phone"){
        setMessage({ ...message, phone : value});

      }else if(name === "object"){
        setMessage({ ...message, object : value});

      }else if(name === "message"){
        setMessage({ ...message, message : value});

      }
   
  }


  function handleClick(event){
    async function sendMessage(){
    await  axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL+'contact',
        data: message,
        headers : {"Content-Type" :"application/x-www-form-urlencoded"}
      })
     .then(res=>{

      try {

        console.log("message sent successfuly ! => ",res);

      } catch (error) {

        console.log(error);
      }
    

    }).catch(err=>{

      console.log(err);
    })
  

    }
    sendMessage();
    event.preventDefault();

  }
  
  return (
    <div className="pt-5 mt-5">
      <div className="text-center">
        <h3 className="textSubHeader">Get In Touch</h3>
        <h1>Contact Me</h1>
        <p>Please feel free to contact me if you need any further information.</p>
      </div>

    
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="first-name">First Name</label>
              <input onChange={handleChange} value={message.fName} type="text" className="form-control  mt-2 styleInputFormContact" name="fName" id="first-name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="last-name">Last Name</label>
              <input onChange={handleChange} value={message.lName}  type="text" className="form-control  mt-2 styleInputFormContact" name="lName" id="last-name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} value={message.email} type="email" className="form-control  mt-2 styleInputFormContact" name="email" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone-number">Phone Number</label>
              <input onChange={handleChange} value={message.phone}  type="text" className="form-control  mt-2 styleInputFormContact" name="phone"  id="phone-number"/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-">
              <label className="text-start" htmlFor="form-object">Object</label>
              <select
              onChange={handleChange} 
              value={message.object}
              id="form-object"
                className="form-select  mt-2 styleInputFormContact"
                aria-label="Default select example"
                name="object"
              >
                <option vlaue="">Choose your one...</option>
                <option value="Hiring">Hiring</option>
                <option value="Service">Service</option>
                <option value="Question">Question</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-">
              <textarea
              onChange={handleChange} 
              value={message.message}
                name="message"
                rows="10"
                className="w-100 styleInputFormContact p-2"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
        <button onClick={handleClick} className="btn btn-outline-primary btnContactHeader px-2">
          Submit
        </button>
        </div>

    </div>
  )
}

export default ContactForm
