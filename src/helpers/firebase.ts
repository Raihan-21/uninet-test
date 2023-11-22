import firebaseApp from "@/configs/firebase";
import {
  doc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const addArticle = async (collectionName: string, data: any) => {
  let result = null;
  let error = null;
  try {
    result = await addDoc(collection(db, collectionName), data);
    console.log(result);
  } catch (e) {
    error = e;
  }
  return { result, error };
};

const getArticles = async (collectionName: string) => {
  let result;
  let error;
  try {
    const queryResult = await getDocs(query(collection(db, collectionName)));
    result = queryResult.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    error = e;
  }
  return { result, error };
};

export { addArticle, getArticles };
