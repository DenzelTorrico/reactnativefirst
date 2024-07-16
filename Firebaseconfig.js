// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Importa otros módulos que necesites, como getAuth para autenticación

const firebaseConfig = {
  apiKey: "AIzaSyAE5NyEbyY8XiIy6ZDh9-PNP4Nz8o0MmyA",
  authDomain: "restaurante-19d83.firebaseapp.com",
  projectId: "restaurante-19d83",
  storageBucket: "restaurante-19d83.appspot.com",
  messagingSenderId: "728290055773",
  appId: "1:728290055773:web:5e3983a127dd704e171fb4",
  measurementId: "G-ZECGRMM722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Exporta otros módulos si los necesitas

export { app, db };
