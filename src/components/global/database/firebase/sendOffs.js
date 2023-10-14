import { db } from "./connection"
import { collection, addDoc} from "firebase/firestore"

export const FirestoreSendOff = async (data) => {
  console.log('here is the data', data)
  try {
  console.log('here is the data', 2, data)
    const docRef = await addDoc(collection(db, "waitlist"), {
      ...data
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

