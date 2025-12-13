
import 'dotenv/config';

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

export class Firebase { 

  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "final-tt",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "797446144362",
    appId: process.env.FIREBASE_APP_ID
  };

  app = initializeApp(this.firebaseConfig);

  db = getFirestore(this.app);

}
