const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes } = require("firebase/storage");
const fs = require("fs");
const path = require("path");

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAahrdwIrzx2tqMSsJgGJrKyuw660BVMKI",
  authDomain: "construingenio-b5694.firebaseapp.com",
  projectId: "construingenio-b5694",
  storageBucket: "construingenio-b5694.appspot.com",
  messagingSenderId: "59114058347",
  appId: "1:59114058347:web:e00813b7e9369bd7fcb72e"
};

// Firebase no tiene versión "require" directa, así que usamos compat
const firebase = require("firebase/compat/app");
require("firebase/compat/storage");

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const localFolder = path.join(__dirname, "public", "image");

function subirImagenesRecursivo(carpeta) {
  fs.readdirSync(carpeta).forEach((archivo) => {
    const ruta = path.join(carpeta, archivo);
    const stats = fs.statSync(ruta);

    if (stats.isDirectory()) {
      subirImagenesRecursivo(ruta);
    } else {
      const contenido = fs.readFileSync(ruta);
      const rutaEnStorage = path.relative(localFolder, ruta).replace(/\\/g, "/");
      const storageRef = storage.ref(`imagenes/${rutaEnStorage}`);

      storageRef.put(contenido).then(() => {
        console.log(`✅ Subida: ${rutaEnStorage}`);
      }).catch(err => {
        console.error(`❌ Error al subir ${rutaEnStorage}:`, err);
      });
    }
  });
}

subirImagenesRecursivo(localFolder);
