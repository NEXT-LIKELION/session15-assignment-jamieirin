import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBWW4JPLjMH5-z5arqeQQ9Whs1tNm7XPpw',
  authDomain: 'session15hw-c88ae.firebaseapp.com',
  projectId: 'session15hw-c88ae',
  storageBucket: 'session15hw-c88ae.firebasestorage.app',
  messagingSenderId: '372052642578',
  appId: '1:372052642578:web:bd8c5e498760b87d5981cb',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};