"use strict";

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const User = require("../../schemas/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const QRCode = require('qrcode');
const { google } = require('googleapis');
const razorpayLib = require("razorpay");
const Ticket = require("../../schemas/ticket");
const Event = require("../../schemas/event");
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const nodeHtmlToImage = require('node-html-to-image');
const withAuth = require("../../middleware/auth").withAuth;

const Razorpay = new razorpayLib({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

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
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'tedx@dtu.ac.in',
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log(transport);
    const str = (newTicket.noOfTickets > 1) ? "Tickets" : "Ticket";
    const url = await nodeHtmlToImage({
      output: './ticket.png',
      html: '<img style="width:100%;" src="https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/mail-images%2FEmail%20ticket1.png?alt=media&token=5a5f5a3f-7f0d-4b71-9109-e7a5ac2a91b3"><div style="display:flex; justify-content: space-around; font-size:50px; background-color:#e62b1e; width:100%; position:relative;"><div style="color:white; margin-top:60px; margin-right:60px; margin-left:30px;">' + newTicket.noOfTickets + ' ' + str + '</div><div><img style="margin-top:10px; margin-bottom:10px; width:200px; height:200px" src="' + ticketQR + '" alt="QR Code"></div></div><img  style="width:100%;" src="https://firebasestorage.googleapis.com/v0/b/tedx-dtu.appspot.com/o/mail-images%2FEmail%20ticket2.png?alt=media&token=9f88400e-b299-4574-bb5d-960966141b26">'
    });
    const val = 'data:image/png;charset=utf-8;base64,' + url.toString('base64');

    const mailOptions = {
      from: 'TEDx DTU <tedx@dtu.ac.in>',
      to: (user?.email) ? user?.email : "tedx@dtu.ac.in",
      subject: 'TEDxDTU 2022 Booking Confirmation',
      attachDataUrls: true,
      html: '<div><img src="' + val + '"></div>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

router.post("/generate-order", withAuth, async (req, res) => {

  const { _id } = JSON.parse(req.body.user);
  const { numTickets, price } = req.body;
  const existingUser = await User.findOne({ _id });

  try {
    if (!existingUser)
      return res
        .json({ msg: "No User found to Generate Order for" })
        .status(404);

    // Get the Order Amount from the cart and generate a receipt ID
    const amount = price * numTickets;
    const receiptID = uuidv4();

    const order = await Razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: receiptID,
    });

    res
      .json({
        orderID: order.id,
        amount: order.amount,
        currency: order.currency,
      })
      .status(200);
  } catch (err) {
    res.json({ msg: "Unknown Server Error" }).status(500);
  }
});

// router.get("/mail", async (req, res) => {

//   let ticketQR = await QRCode.toDataURL("sdsjdsjd");

//   const newTicket = new Ticket({
//     userID: "jhfj",
//     eventID: "jfhj",
//     razorpayOrderID: "jdsh",
//     noOfTickets: 4
//   });

//   sendMail({ newTicket, ticketQR })
//     .then((result) => console.log('Email sent successfully!'))
//     .catch((error) => console.log(error.message));


//   res.json({
//     success: true,
//     msg: "Payment verified and accepted",
//     redirectURL: "",
//   }).status(200);

// });

router.post("/verify", async (req, res) => {

  const SECRET = process.env.SECRET;
  const details = req.body.payload.payment.entity;
  const { order_id, amount, notes } = details;
  const { firebaseID, _id } = notes;

  const hash = crypto
    .createHmac("SHA256", SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (req.headers["x-razorpay-signature"] !== hash) {
    res.json({
      success: false,
      msg: "Payment can not be verified and hence declined",
      redirectURL: "",
    });
    return;
  }

  const Existingticket = await Ticket.findOne({ razorpayOrderID: order_id });
  if (Existingticket)
    return res
      .json({
        success: false,
        msg: "Ticket with order Id already exist"
      });

  // Getting User Details
  const user = await User.findOne({ firebaseID });
  // Getting Event Details
  const event = await Event.findById(_id);

  const noOfTickets = amount / (event.price * 100);

  // Add the Cart Items to Orders using serverOrderID and generate an invoice
  const newTicket = new Ticket({
    userID: user._id,
    eventID: event._id,
    razorpayOrderID: order_id,
    noOfTickets: noOfTickets
  });

  try {
    await newTicket.save();
    // Updating tickets in MongoDB
    user.tickets = [...user.tickets, newTicket._id];
    await user.save();

  } catch (error) {
    res.status(500).json({
      msg: err.toString(),
    });
  }

  // console.log("hi");
  let ticketQR = await QRCode.toDataURL(order_id);

  sendMail({ user, event, newTicket, ticketQR })
    .then((result) => console.log('Email sent successfully!'))
    .catch((error) => console.log(error.message));

  res.json({
    success: true,
    msg: "Payment verified and accepted",
    redirectURL: "",
  }).status(200);
});

router.get("/ticket-by-id", async (req, res) => {
  const { razorpayOrderID } = req.query;
  try {
    const ticket = await Ticket.findOne({ razorpayOrderID });
    if (!ticket) return res.json({ msg: "No Ticket Found" }).status(404);
    return res.json(ticket).status(200);
  } catch (error) {
    res.json({ msg: "Unknown Server Error" }).status(500);
  }
});
module.exports = router;
