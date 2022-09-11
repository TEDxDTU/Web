"use strict";

const express = require("express");
const router = express.Router();
const shortid = require('shortid')
const User = require("../../schemas/user");
const admin = require("firebase-admin");
const razorpayLib = require("razorpay");
const Razorpay = new razorpayLib({
  key_id: 'rzp_test_P5GUEZ3SzH045X',
  key_secret: 'cXxUCWDrHASxT14E2Edupr2C'
});

router.post("/generate-order", async (req, res) => {

  const { _id }=req.body;
  
  const existingUser = await User.findOne({ _id });

  try {
    if (!existingUser) return res.json({ msg: "No User found to Generate Order for" }).status(404);

    // Get the Order Amount from the cart and generate a receipt ID
    const amount = 1;
    const receiptID = shortid.generate();

    const order = await Razorpay.orders.create({
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

router.post("/verify-order-signature", (req, res) => {

  console.log(req.body);

  res.json({status:'OK'});

  // const { paymentID, serverOrderID, paymentSignature } = req.body;
  // const hash = crypto.createHmac('SHA256', devConfig.RAZORPAY_KEY_SECRET).update(serverOrderID + "|" + paymentID).digest('hex');

  // if (paymentSignature !== hash) {
  //   res.json({
  //     success: false,
  //     msg: "Payment can not be verified and hence declined",
  //     redirectURL: "",
  //   });
  //   return;
  // };

  // // Add the Cart Items to Orders using serverOrderID and generate an invoice

  // res.json({
  //   success: true,
  //   msg: "Payment verified and accepted",
  //   redirectURL: "",
  // }).status(200);

});

module.exports = router;