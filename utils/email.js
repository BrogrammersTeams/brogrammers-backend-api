const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const ClientId = "164656044104-f1skm6h54d62nott6pd2168al8ej0p27.apps.googleusercontent.com";
const ClientSecret = "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";
const RedirectURI = "https://developers.google.com/oauthplayground";
const RefreshToken = "1//04H9xKk9GArulCgYIARAAGAQSNwF-L9IraJ5bp0wYPGrq3I33hTUoAnzPLWod4lShzoHs-CVEAExtAXpJoUUpF15_xBzMD5id7Pw";

const oAuth2Client = new google.auth.OAuth2(ClientId, ClientSecret, RedirectURI);

oAuth2Client.setCredentials({ refresh_token: RefreshToken });

async function sendEmail(To, Subject, topic) {
  try {
    const accesstoken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        type: "OAuth2",
        user: "brogrammers.teams@gmail.com",
        clientId: ClientId,
        clientSecret: ClientSecret,
        refreshToken: RefreshToken,
        accessToken: accesstoken,
      },
    });

    const mailOptions = {
      from: "brogrammers.teams@gmail.com",
      to: To,
      subject: Subject,
      text: topic,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("result is ", result);
    return result;
  } catch (error) {
    console.log("Error is", error);
  }
}

module.exports = sendEmail;