import { type NextApiRequest, type NextApiResponse } from "next";
import { sendWaitlistEmail } from "../../lib/brevo/send-waitlist-email";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({ success: true });
  } else if (req.method === "POST") {
    if (typeof req.body === "string") {
      const payload = JSON.parse(req.body) as { email: string; name: string };
      try {
        await sendWaitlistEmail(payload.email, payload.name);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
    }
  }
}
