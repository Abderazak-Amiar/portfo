import React from "react"

function ContactForm() {
  return (
    <div>
      <div className="text-center">
        <h3>Get In Touch</h3>
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <form>
        <div className="form-group">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="first-name mb-2">First Name</label>
              <input type="text" className="form-control  mt-2 styleInputFormContact" name="fName" id="first-name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" className="form-control  mt-2 styleInputFormContact" name="lName" id="last-name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control  mt-2 styleInputFormContact" name="fName" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="text" className="form-control  mt-2 styleInputFormContact" name="lName"  id="phone-number"/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-">
              <label className="text-start" htmlFor="form-object">Object</label>
              <select
              id="form-object"
                className="form-select  mt-2 styleInputFormContact"
                aria-label="Default select example"
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
                name="message"
                rows="10"
                className="w-100 styleInputFormContact p-2"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btnSubmitContactForm">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
