import React from 'react'
import './surveyForm.css'
export default function surveyForm() {
  return (
    <div className='container'>
        <header>  
            <h2>Survey Form</h2>
            <p><strong>Thank you for taking the time to help us improve the Skillvalley</strong></p>
        </header>
        <hr/>
        <br/>
        <form id="survey-form">
        <div className="form-group">
          <label id="name-label" for="name">Name :</label>
        </div>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        <div className="form-group">
          <label id="email-label" for="email">Email :</label>
        </div>
          <input
            type="email"
            placeholder="Enter your Email"
            required/>
       
        <div className="form-group">
          <label id="number-label" for="number">Age<span className="clue">(optional):</span></label>
        </div>
          <input
            type="number"
            min="10"
            max="99"
            placeholder="Age" />
        <div className="form-group">
          <p>Which option best describes your current role?</p>
        </div>
          <select id="dropdown" name="role" className="form-control" required>
            <option disabled selected value>Select current role</option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        

        <div className="form-group">
          <p>Would you recommend Skillvalley to a friend?</p>
          <label>
            <input
              name="user-recommend"
              value="definitely"
              type="radio"
              className="input-radio"
              checked
            />Definitely</label>
           <br></br>
          <label>
            <input
              name="user-recommend"
              value="maybe"
              type="radio"
              className="input-radio"
            />Maybe</label>
           <br></br>
          <label
            ><input
              name="user-recommend"
              value="not-sure"
              type="radio"
              className="input-radio"
            />Not sure</label>
        </div>

        <div className="form-group">
          <p>What is your favorite feature of Skillvalley?</p>
        </div>
          <select id="most-like" name="mostLike" className="form-control" required>
            <option disabled selected value>Select an option</option>
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="openSource">Open Source</option>
          </select>
        

        <div className="form-group">
          <p>
            What would you like to see improved?
            <span className="clue">(Check all that apply)</span>
          </p>
        </div>
          <label
            ><input
              name="prefer"
              value="front-end-projects"
              type="checkbox"
              className="input-checkbox"
            />Front-end Projects</label>
           <br></br>
          <label>
            <input
              name="prefer"
              value="back-end-projects"
              type="checkbox"
              className="input-checkbox"/>Back-end Projects</label>
             <br></br>
          <label><input
              name="prefer"
              value="data-visualization"
              type="checkbox"
              className="input-checkbox"/>Data Visualization</label>
             <br></br>
          <label><input
              name="prefer"
              value="challenges"
              type="checkbox"
              className="input-checkbox"/>Challenges</label>
               <br></br>
          <label><input
              name="prefer"
              value="open-source-community"
              type="checkbox"
              className="input-checkbox"/>Open Source Community</label>
             <br></br>
          <label ><input
              name="prefer"
              value="gitter-help-rooms"
              type="checkbox"
              className="input-checkbox" />Gitter help rooms</label>
               <br></br>
          <label><input
              name="prefer"
              value="videos"
              type="checkbox"
              className="input-checkbox" />Videos</label>
             <br></br>
          <label><input
              name="prefer"
              value="city-meetups"
              type="checkbox"
              className="input-checkbox"/>City Meetups</label>
             <br></br>
          <label><input
              name="prefer"
              value="wiki"
              type="checkbox"
              className="input-checkbox"/>Wiki</label>
             <br></br>
          <label><input
              name="prefer"
              value="forum"
              type="checkbox"
              className="input-checkbox"/>Forum</label>
             <br></br>
          <label><input
              name="prefer"
              value="additional-courses"
              type="checkbox"
              className="input-checkbox"/>Additional Courses</label>
        

        <div className="form-group">
          <p>Any comments or suggestions?</p>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit" id="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    
    </div>
  )
}
