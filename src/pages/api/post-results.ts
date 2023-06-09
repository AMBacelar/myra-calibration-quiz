import { type NextApiRequest, type NextApiResponse } from "next";
import { createFirebaseAdminApp } from "../../lib/firebase/firebaseAdmin";
import { getDatabase } from "firebase-admin/database";

export default async function getTeams(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ success: true });
  } else if (req.method === "POST") {
    if (typeof req.body === "string") {
      const payload = JSON.parse(req.body) as object;
      try {
        createFirebaseAdminApp();
        const db = getDatabase();
        const ref = db.ref("users");

        const newUsersRef = ref.push();
        await newUsersRef.set(payload);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
    }
  }
}
