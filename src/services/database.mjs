import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxoUVvZeks-qFpc0ilgjpDKUR60fu8FDg",
  authDomain: "projeto-vini-974c4.firebaseapp.com",
  databaseURL: "https://projeto-vini-974c4-default-rtdb.firebaseio.com",
  projectId: "projeto-vini-974c4",
  storageBucket: "projeto-vini-974c4.appspot.com",
  messagingSenderId: "1003540098978",
  appId: "1:1003540098978:web:b10dfd7adc49394b828cfb",
  measurementId: "G-32L52F61MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts(){
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

}
export async function addProduct(){

  try {
    const docRef = await addDoc(collection(db, "products"), {
      
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
  
  
}


export function teste(){
  console.log("teste")
}