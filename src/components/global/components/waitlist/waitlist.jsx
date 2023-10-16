import React, { useState } from "react";
import "./waitlist.css";
import { FirestoreSendOff } from "../../database/firebase/sendOffs"
import { dateConversion } from "../../functions/functions";
import { v4 as uuidv4 } from 'uuid';
import largeSignupButton from "../../../..//images/icons/signupButton-Large.svg";

export default function Waitlist() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("_empty_");

  const validateForm = async (e) => {
    e.preventDefault();
    let emailLabel = document.getElementsByClassName('email-label')[0]
    let fNameLabel = document.getElementsByClassName('fName-label')[0]
    let lNameLabel = document.getElementsByClassName('lName-label')[0]
    let emailInput = document.getElementsByClassName('email-input')[0]
    let fNameInput = document.getElementsByClassName('fName-input')[0]
    let lNameInput = document.getElementsByClassName('lName-input')[0]
    let commentInput = document.getElementsByClassName('comment-input')[0]
    // eslint-disable-next-line
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.\[a-zA-Z]{2,}$');    
    if(fName !== "" && lName !== "" && email !== ""){
      fNameLabel.setAttribute("style", "color: #252428;")
      lNameLabel.setAttribute("style", "color: #252428;")
      emailLabel.setAttribute("style", "color: #252428;")
      console.log(email,validEmail.test(email))
      if(validEmail.test(email)){
        console.log("valid email")
        const formValues = {
          u_id: `${uuidv4()}`,
          first_name: fName,
          last_name: lName,
          email: email,
          comment: comment,
          date: await dateConversion(new Date()), 
          contact_date: '_empty_',
          contacted: false,
          admin_contact: '_empty_',
          dateCreated: new Date()
          
        }
        FirestoreSendOff(formValues)
        setFName("");
        setLName("");
        setEmail("");
        setComment("");
        fNameInput.value = "";
        lNameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";

      }else{
        emailLabel.setAttribute("style", "color: #FF0000;")
      }
    }else{
      if(fName === ""){
        fNameLabel.setAttribute("style", "color: #FF0000;")
      }
      if(lName === ""){
        lNameLabel.setAttribute("style", "color: #FF0000;")
      }
      if(email === "" || !validEmail.test(email)){
        emailLabel.setAttribute("style", "color: #FF0000;")
      }
    }
  }
  return (
    <div id="waitlist" className="waitlist-container">
      <div className="waitlist-content">
        <div className="waitlist-content-header">
          <p>Waitlist</p>
        </div>
        <div className="waitlist-form-container">
          <form className="waitlist-content-form">
            <div className="waitlist-name-container">
              <div className="waitlist-fName-container fName">
                <label className="waitlist-label fName-label" htmlFor="fName">First Name<span className="waitlist-asterik">*</span></label>
                <input className="waitlist-input fName-input" type="text" onChange={(e)=>{setFName(e.target.value)}} required/>
              </div>
              <div className="waitlist-lName-container lName">
                <label className="waitlist-label lName-label" htmlFor="lName">Last Name<span className="waitlist-asterik">*</span></label>
                <input className="waitlist-input lName-input" type="text" onChange={(e)=>{setLName(e.target.value)}} required/>
              </div>
            </div>
            <div className="waitlist-email-container ">
              <label className="waitlist-label email-label" htmlFor="email">Email<span className="waitlist-asterik">*</span></label>
              <input className="waitlist-input email-input" type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div className="waitlist-comment-container">
              <label className="waitlist-label" htmlFor="comment">Provide FeedBack</label>
              <p className="waitlist-label-feeback-text">Tell us any features or recommendations you would like to see for our mobile app!</p>
              <textarea placeholder="Suggest a feedback..." className="waitlist-comment-input comment-input" type="text" onChange={(e)=>{setComment(e.target.value)}} />
            </div>
            <div className="waitlist-button-container">
                <img className="waitlist-button-submit"onClick={(e)=>{validateForm(e)}} src={largeSignupButton} alt="signup button" />
            </div>
          </form>
        </div>
      </div>                
    </div>
  );
}