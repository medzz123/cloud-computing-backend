import admin from 'firebase-admin';

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'production') {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const firebaseAccountCredentials = require('../../credentials.json');
  const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
