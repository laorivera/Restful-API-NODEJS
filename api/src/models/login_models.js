import { Firebase } from '../server/firebase.js'
import { collection, query, where, getDocs } from 'firebase/firestore';


export class LoginModel {

  #firebase = new Firebase();

  usersCollection = collection(this.#firebase.db, 'users');

  async validateCredentials(username, password) {
    try {
        const q = query(this.usersCollection, where('username', '==', username));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null; 
        }
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (password !== userData.password) {
            return null;
        }
      
      return {
        id: userDoc.id,
        username: userData.username,
        email: userData.email
      };

    } catch(error) {
      console.error('Login error:', error);
      throw error;
    }
  }
}