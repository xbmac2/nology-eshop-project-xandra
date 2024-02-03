import { collection, getDoc, getDocs, doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/firestore.js"

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

export const getProductById = async (id) => {
  
  const docRef = doc(db, "flowers", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Sorry, this product does not exist");
  };

  return {id: docSnap.id, ...docSnap.data()};

}

export const getProductVariants = async (id) => {

  const querySnapshot = await getDocs(collection(db, "flowers", id, "variants"));

  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, "->", doc.data());
  // });

  const variantsArr = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  });

  return variantsArr;
}

//toggling faves
export const toggleFavourite = async (id) => {
  const docRef = doc(db, "flowers", id);

  const docSnap = await getDoc(docRef);

  //console.log(docSnap.data());

  await updateDoc(docRef, {
    favourited: !docSnap.data().favourited
  })

  //testcomm
};

//checking out cart updates item quantity
export const updateQuantity = async (id) => {
  const docRef = doc(db, "flowers", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  // await updateDoc(docRef, {
  //   favourited: !docSnap.data().favourited
  // })

};