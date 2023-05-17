/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import SibApiV3Sdk from "sib-api-v3-sdk";

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

export const sendWaitlistEmail = (email: string, name: string) => {
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      templateId: 11,
      params: {
        greeting: "This is the default greeting",
        headline: "This is the default headline",
      },
      to: [{ name, email }],
    })
    .then(
      function (data: unknown) {
        console.log(data);
      },
      function (error: unknown) {
        console.error(error);
      }
    );
};
