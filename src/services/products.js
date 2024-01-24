import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "flowers"));

  //console.log(querySnapshot, "query snapshot");

  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, doc.data());
  // })

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  //console.log(dataToReturn);
  return dataToReturn; //an array of Objects
}