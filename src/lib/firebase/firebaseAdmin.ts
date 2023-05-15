import admin from "firebase-admin";

function formatFirebasePrivateKey(key: string) {
  return key.replace(/\\n/g, "\n");
}

export function createFirebaseAdminApp() {
  const params = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  };
  if (
    params.clientEmail !== undefined &&
    params.databaseURL !== undefined &&
    params.privateKey !== undefined &&
    params.projectId !== undefined
  ) {
    const privateKey = formatFirebasePrivateKey(params.privateKey);

    // if already created, return the same instance
    if (admin.apps.length > 0) {
      return admin.app();
    }

    // create certificate
    const cert = admin.credential.cert({
      projectId: params.projectId,
      clientEmail: params.clientEmail,
      privateKey,
    });

    // initialize admin app
    return admin.initializeApp({
      credential: cert,
      projectId: params.projectId,
      databaseURL: params.databaseURL,
    });
  }
}
