"use strict";

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const User = require("../../schemas/user");
const crypto = require("crypto");
const razorpayLib = require("razorpay");
const Ticket = require("../../schemas/ticket");
const Event = require("../../schemas/event");
const admin = require("firebase-admin");

const Razorpay = new razorpayLib({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/generate-order", async (req, res) => {
  const { _id } = JSON.parse(req.body.user);
  const { numTickets } = req.body;

  const existingUser = await User.findOne({ _id });

  try {
    if (!existingUser)
      return res
        .json({ msg: "No User found to Generate Order for" })
        .status(404);

    // Get the Order Amount from the cart and generate a receipt ID
    const amount = 1 * numTickets;
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

router.post("/verify", async (req, res) => {

  const SECRET = process.env.SECRET;
  const PricePerTicket = 100;

  const details = req.body.payload.payment.entity;
  const { email, order_id, amount, notes } = details;
  const noOfTickets = amount / PricePerTicket;

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

  // Getting User Details
  const user = await User.findOne({ firebaseID });

  // Getting Event Details
  const event = await Event.findById(_id);

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
    user.tickets=[...user.tickets, newTicket._id];
    await user.save();

  } catch (error) {
    res.status(500).json({
      msg: err.toString(),
    });
  }

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
