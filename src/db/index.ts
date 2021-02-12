import admin from 'firebase-admin';

import firebaseAccountCredentials from '../../credentials.json';

const NODE_ENV = process.env.NODE_ENV;

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

if (NODE_ENV === 'production') {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
} else {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
