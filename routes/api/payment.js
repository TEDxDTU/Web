"use strict";

const express = require("express");
const router = express.Router();
const User = require("../../schemas/user");
const admin = require("firebase-admin");
const razorpayLib = require("razorpay");
const Razorpay = new razorpayLib({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post("/generate-order", (req, res) => {

  const existingUser = User.findOne({ _id });

  try {
    if (!existingUser) return res.json({ msg: "No User found to Generate Order for" }).status(404);

    // Get the Order Amount from the cart and generate a receipt ID
    const amount = 1;
    const receiptID = "sample_receipt_id#_0";

    const order = Razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: receiptID,
    });

    res.json({
      orderID: order.id,
      amount: order.amount,
      currency: order.currency
    }).status(200);

  } catch (err) {
    res.json({ msg: "Unknown Server Error" }).status(500);
  }

});

router.post("verify-order-signature", (req, res) => {
  const { paymentID, serverOrderID, paymentSignature } = req.body;
  const hash = crypto.createHmac('SHA256', devConfig.RAZORPAY_KEY_SECRET).update(serverOrderID + "|" + paymentID).digest('hex');

  if (paymentSignature !== hash) {
    res.json({
      success: false,
      msg: "Payment can not be verified and hence declined",
      redirectURL: "",
    });
    return;
  };

  // Add the Cart Items to Orders using serverOrderID and generate an invoice

  res.json({
    sucess: true,
    msg: "Payment verified and accepted",
    redirectURL: "",
  }).status(200);

});
