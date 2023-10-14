import { db } from "./connection"
import { collection, query, where, getDocs } from "firebase/firestore"
import { sha256 } from "js-sha256";

export const adminSignIn = async (data) => {
  
  let password = sha256(data.password);
  
  try{
    const adminRef = collection(db, "admin");
    const q = query(adminRef, where("admin", "==", data.admin ), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      return false;
    }
    else{
      sessionStorage.setItem("admin", true);
      sessionStorage.setItem("admin_name", data.admin);
      return true;
    }
  }
  catch(error){
    console.log(error)
    return false;
  }
}

export const waitlist_retrival = async (admin) => {
  if(!admin){
    return false;
  }
  try{
    const waitlistRef = collection(db, "waitlist");
    const querySnapshot = await getDocs(waitlistRef);
    let waitlist = [];
    querySnapshot.forEach((doc) => {
      waitlist.push(doc.data());
    });
    return {response: true, waitlist: waitlist};
  }
  catch(error){
    console.log(error)
    return false;
  }
}