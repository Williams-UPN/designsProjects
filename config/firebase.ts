import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAahrdwIrzx2tqMSsJgGJrKyuw660BVMKI",
  authDomain: "construingenio-b5694.firebaseapp.com",
  projectId: "construingenio-b5694",
  storageBucket: "construingenio-b5694.appspot.com",
  messagingSenderId: "59114058347",
  appId: "1:59114058347:web:e00813b7e9369bd7fcb72e"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
