import { collection, getDoc, getDocs, doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/firestore.js"

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "flowers"));

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataToReturn;
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

  const variantsArr = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  });

  return variantsArr;
}

export const toggleFavourite = async (id) => {
  const docRef = doc(db, "flowers", id);

  const docSnap = await getDoc(docRef);

  await updateDoc(docRef, {
    favourited: !docSnap.data().favourited
  })
};

//checking out cart updates item quantity
export const updateQuantity = async (productId, variantId, unitsPurchased) => {
  const variantDocRef = doc(db, "flowers", productId, "variants", variantId);

  const docSnap = await getDoc(variantDocRef);

  await updateDoc(variantDocRef, {
    quantity: docSnap.data().quantity - unitsPurchased
  })

};