import {initializeApp} from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey:'AIzaSyBoexcVLsachVTptDB_36BdzcnFEq4WaAI',
    authDomain:'t-music-be993.firebaseapp.com',
    projectId:'t-music-be993',
    storageBucket:'t-music-be993.appspot.com',
    messaingSenderId:'650972389603',
    appId:'1:650972389603:web:db9a114d4dbf0f1053a5d6',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};