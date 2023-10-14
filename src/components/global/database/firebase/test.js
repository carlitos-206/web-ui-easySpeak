import { db } from "./connection"
import { collection, addDoc } from "firebase/firestore"
import { dateConversion } from "../../functions/functions"
import { v4 as uuidv4 } from 'uuid';

export const FirestoreSendOff = async () => {
const profiles = [
  {
    u_id: `${uuidv4()}`,
    first_name: "Alice", last_name: "Smith", email: "alice.smith@example.com", comment: "I've heard about easySpeak's upcoming features. Can't wait to try them out!", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {u_id: `${uuidv4()}`,
    first_name: "Bob", last_name: "Johnson", email: "bob.johnson@example.com", comment: "Anticipating the launch of easySpeak. I believe it's going to revolutionize communication.", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    first_name: "Charlie", last_name: "Williams", email: "charlie.williams@example.com", comment: "Been following the development of easySpeak closely. It looks promising!", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    first_name: "David", last_name: "Brown", email: "david.brown@example.com", comment: "easySpeak seems to have some innovative features in the pipeline. Eagerly waiting!", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    first_name: "Eva", last_name: "Jones", email: "eva.jones@example.com", comment: "I'm excited about the potential of easySpeak. Hope to see it live soon.", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    first_name: "Frank", last_name: "Miller", email: "frank.miller@example.com", comment: "Been hearing great things about easySpeak's development. Can't wait for the release!", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    first_name: "Grace", last_name: "Davis", email: "grace.davis@example.com", comment: "I've got high expectations for easySpeak. The previews look fantastic.", date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Hannah", last_name: "Garcia", email: "hannah.garcia@example.com", comment: "I'm always on the lookout for innovative apps. easySpeak is definitely on my radar!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Ian", last_name: "Rodriguez", email: "ian.rodriguez@example.com", comment: "The buzz around easySpeak is hard to ignore. Eagerly awaiting its debut!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Jenna", last_name: "Martinez", email: "jenna.martinez@example.com", comment: "I've seen some sneak peeks of easySpeak. It's going to be a game changer!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Kyle", last_name: "Hernandez", email: "kyle.hernandez@example.com", comment: "From what I've heard, easySpeak is shaping up to be a must-have app. Can't wait!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Lana", last_name: "Lopez", email: "lana.lopez@example.com", comment: "Super excited about easySpeak. Hope to be one of the first users when it's out."
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Mason", last_name: "Jackson", email: "mason.jackson@example.com", comment: "Been tracking easySpeak's progress. It's looking very promising!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Nina", last_name: "Harris", email: "nina.harris@example.com", comment: "If the previews of easySpeak are anything to go by, we're in for a treat!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Oliver", last_name: "Clark", email: "oliver.clark@example.com", comment: "The developers behind easySpeak seem to be onto something big. Excited to see the final product!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Penelope", last_name: "Lewis", email: "penelope.lewis@example.com", comment: "easySpeak might just be the app I've been waiting for. Eagerly awaiting its launch."
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Quincy", last_name: "Robinson", email: "quincy.robinson@example.com", comment: "I've been in need of an app like easySpeak. Hope the development completes soon!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Rachel", last_name: "Walker", email: "rachel.walker@example.com", comment: "The features hinted at for easySpeak are just what I need. Can't wait to try it out!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Steve", last_name: "Hall", email: "steve.hall@example.com", comment: "I'm super curious about easySpeak's capabilities. Hope they launch soon!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Tanya", last_name: "Young", email: "tanya.young@example.com", comment: "With all the anticipation around easySpeak, I'm sure it's going to be groundbreaking."
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Ulysses", last_name: "King", email: "ulysses.king@example.com", comment: "Every update I hear about easySpeak gets me more excited. Waiting for its release!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "Victoria", last_name: "Wright", email: "victoria.wright@example.com", comment: "easySpeak might be the solution many of us have been waiting for. Fingers crossed for its success!"
  },
  {
    u_id: `${uuidv4()}`,
    date: await dateConversion(new Date()),
    contact_date: '_empty_',
    contacted: false,
    admin_contact: '_empty_',
    dateCreated: new Date()
    , first_name: "William", last_name: "Mitchell", email: "william.mitchell@example.com", comment: "Can't remember the last time I was this excited about an upcoming app. Go easySpeak!"
  }
];

const docRef = collection(db, "waitlist");
profiles.forEach(async (profile) => {
  const doc = await addDoc(docRef, profile);
  console.log("Document written with ID: ", doc.id);
});
}
