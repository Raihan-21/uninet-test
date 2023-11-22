import firebaseApp from "@/configs/firebase";
import {
  doc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const addData = async (collectionName: string, data: any) => {
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

const editData = async (collectionName: string, id: string, data: any) => {
  let result;
  let error;
  try {
    result = await setDoc(doc(db, collectionName, id), data, { merge: true });
  } catch (e) {
    error = e;
  }
  return { result, error };
};

const getDatas = async (collectionName: string) => {
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

const deleteData = async (collectionName: string, id: string) => {
  let result;
  let error;
  try {
    result = await deleteDoc(doc(db, collectionName, id));
  } catch (e) {
    error = e;
  }
  return { result, error };
};

export { addData, getDatas, editData, deleteData };
