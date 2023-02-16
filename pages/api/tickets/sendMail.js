const { v4: uuidv4 } = require("uuid");
const User = require("../../../schemas/user");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const { google } = require("googleapis");
const razorpayLib = require("razorpay");
const Ticket = require("../../../schemas/ticket");
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const nodeHtmlToImage = require("node-html-to-image");

const oAuth2Client = new google.auth.OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.EMAIL_REFRESH_TOKEN });

async function sendMail(req) {
    const { user, ticketQR, newTicket } = req;
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "tedx@dtu.ac.in",
                clientId: process.env.EMAIL_CLIENT_ID,
                clientSecret: process.env.EMAIL_CLIENT_SECRET,
                refreshToken: process.env.EMAIL_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const str = newTicket.noOfTickets > 1 ? "Tickets" : "Ticket";

        const mailOptions = {
            from: "tedx@dtu.ac.in",
            to: user?.email ? user?.email : "tedx@dtu.ac.in",
            subject: "TEDxDTU 2022 Booking Confirmation",
            attachDataUrls: true,
            html: '<div><img style="width:100%;" src="https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/mail-images%2FEmail%20ticket1.png?alt=media&token=5a5f5a3f-7f0d-4b71-9109-e7a5ac2a91b3"><div style="display:flex; justify-content: space-around; font-size:50px; background-color:#e62b1e; width:100%; position:relative;"><div style="color:white; margin-top:60px; margin-right:60px; margin-left:30px;">' +
                newTicket.noOfTickets +
                " " +
                str +
                '</div><div><img style="margin-top:10px; margin-bottom:10px; width:200px; height:200px" src="' +
                ticketQR +
                '" alt="QR Code"></div></div><img  style="width:100%;" src="https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/mail-images%2FEmail%20ticket2.png?alt=media&token=9f88400e-b299-4574-bb5d-960966141b26"></div>',
        };

        // console.log(mailOptions);
        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        const init = require("../../../backend/init");
        console.log("GET request received");
        try {
            let ticketQR = await QRCode.toDataURL("sdsjdsjd");

            const newTicket = new Ticket({
                userID: "jhfj",
                eventID: "jfhj",
                razorpayOrderID: "jdsh",
                noOfTickets: 4
            });

            sendMail({ newTicket, ticketQR })
                .then((result) => console.log('Email sent successfully!'))
                .catch((error) => console.log(error.message));

            res.status(200).json({
                success: true,
                msg: "Payment verified and accepted",
                redirectURL: "",
            });

        } catch (error) {
            res.status(500).json({
                msg: err.toString(),
            });
        }
    }
}