import React, { useState, useEffect } from "react";
import "./admin.css";
import TopMenu from "../../../components/nav/navbar";
import { dateConversion } from "../../../functions/functions";
import { adminSignIn } from "../retrival"
import { db } from "../connection"
// import { FirestoreSendOff } from "../test";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
} from 'firebase/firestore';

export default function Admin() {
  const [admin, setAdmin] = useState(sessionStorage.getItem('admin'));
  const [waitlist, setWaitlist] = useState(null);
  // const [contactCount, setContactCount] = useState(0);
  // const [notContactedCount, setNotContactedCount] = useState(0);

  
  
 
  
  useEffect(() => {
    // let unsubscribe;

    if (admin) {
      let adminSignIn = document.getElementsByClassName('admin-signin')[0];
      adminSignIn.setAttribute("style", "display: none;")
      const items = query(
        collection(db, 'waitlist'),
        // orderBy('dateCreated', 'desc'),
        orderBy('contacted', 'asc'),

      );
      const unsubscribe = onSnapshot(
        items,
        (snapshot) => {
          setWaitlist(snapshot.docs);
        },
      );
      return () => { 
        unsubscribe(); 
      }
    };
  }, [admin]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const data = {
      admin: username,
      password: password
    }

    let isAdmin = await adminSignIn(data);
    if (isAdmin) {
      setAdmin(true);
      let adminSignIn = document.getElementsByClassName('admin-signin')[0];
      adminSignIn.setAttribute("style", "display: none;")
      // FirestoreSendOff()
    } else {
      setAdmin(false);
    }
  };
  const adminContact = async (e, id, email) => {
    e.preventDefault();
    
    // Confirm dialog
    const isConfirmed = window.confirm('Are you sure you want to contact this user?');
  
    // If the admin confirms the action
    if (isConfirmed) {
      console.log(id);
  
      let contactDate = await dateConversion(new Date());
      const adminRef = collection(db, "waitlist");
      const q = query(adminRef, where("u_id", "==", id));
      const querySnapshot = await getDocs(q);
  
      // Checking if any documents are returned
      if (querySnapshot.size > 0) {

        querySnapshot.forEach(async (document) => {
          const adminDoc = doc(db, "waitlist", document.id); // Reference to the specific document
          await updateDoc(adminDoc, {
            contacted: true,
            contact_date: contactDate,
            admin_contact: sessionStorage.getItem('admin_name')
          });
        });
        window.open(`mailto:${email}`);
      }
    } else {
      alert("Action was cancelled by the admin.");
    }
  };
  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = "/admin";
  }
  return (
    <>
      <TopMenu page={'admin'} />
      <div id="admin" className="admin-container">
        <div className="admin-signin">
          <form  className='admin-form' onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input name="username" className="admin-field" type="text" />
            
            <label htmlFor="password">password</label>
            <input name="password" className="admin-field" type="password" />
            
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
        {admin && waitlist && (
          <div className="admin-waitlist-container">
            <div>
              <p className="admin-waitlist-counter">Waitlist Counter: {waitlist.length}</p>
              <p className="admin-waitlist-counter">Admin Session: {sessionStorage.getItem('admin_name')}</p>
              <p className="admin-waitlist-counter admin_logout" onClick={(e)=>{logout(e)}} >Log Out</p>
            </div>
            {/* Render your waitlist here */}
            {/* This is a simple example, adapt it to your needs */}
            {waitlist.map((item, index) => {
              let contact = item.data().contacted ? 'contacted' : 'not-contacted';
              if(item.data().comment === ""|| item.data().comment === " "){
                item.data().comment = "_empty_"
              }
              if((sessionStorage.getItem('admin_name') === item.data().admin_contact) && item.data().contacted === true){
              return(
              <div className={`admin-waitlist-content ${contact} active`} key={index}>
                <p>ID: {item.data().u_id}</p>
                <p>First Name: {item.data().first_name}</p>
                <p>Last Name: {item.data().last_name}</p>
                <p>Email: {item.data().email}</p>
                <p>Comment: {item.data().comment}</p>  
                <p>Date:{item.data().date}</p>
                <p>Contact Date: {item.data().contact_date}</p>
                <p>Admin Contact: {item.data().admin_contact}</p>
                <button onClick={(e)=>{adminContact(e, item.data().u_id, item.data().email)}}>Contact</button>
                <button onClick={async (e)=>{
                      e.preventDefault();
                      const adminRef = collection(db, "waitlist");
                      const q = query(adminRef, where("u_id", "==", item.data().u_id));
                      const querySnapshot = await getDocs(q);
                      querySnapshot.forEach(async (document) => {
                        const adminDoc = doc(db, "waitlist", document.id); // Reference to the specific document
                        await deleteDoc(adminDoc);
                      });
                    }}>Delete</button>
              </div>
              )
              }
              if(item.data().contacted === false){
                return(
                  <div className={`admin-waitlist-content ${contact}`} key={index}>
                    <p>ID: {item.data().u_id}</p>
                    <p>First Name: {item.data().first_name}</p>
                    <p>Last Name: {item.data().last_name}</p>
                    <p>Email: {item.data().email}</p>
                    <p>Comment: {item.data().comment}</p>  
                    <p>Date:{item.data().date}</p>
                    <p>Contact Date: {item.data().contact_date}</p>
                    <p>Admin Contact: {item.data().admin_contact}</p>
                    <button onClick={(e)=>{adminContact(e, item.data().u_id, item.data().email)}}>Contact</button>

                  </div>
                  )
              }
              if(item.data().contacted === true && (sessionStorage.getItem('admin_name') !== item.data().admin_contact)){
                return(
                  <div className={`admin-waitlist-content ${contact}`} key={index}>
                    <p>ID: {item.data().u_id}</p>
                    <p>First Name: {item.data().first_name}</p>
                    <p>Last Name: {item.data().last_name}</p>
                    <p>Email: {item.data().email}</p>
                    <p>Comment: {item.data().comment}</p>  
                    <p>Date:{item.data().date}</p>
                    <p>Contact Date: {item.data().contact_date}</p>
                    <p>Admin Contact: {item.data().admin_contact}</p>
                    <button onClick={(e)=>{adminContact(e, item.data().u_id, item.data().email)}}>Contact</button>
                  </div>
                  )
              }
              return(
                <></>
              )
            })}
          </div>
        )}
    </>
  );
}