const mongoose = require("mongoose");
const validator = require("validator");
const ticketSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    eventID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Event",
    },

    //may also contain UPI transaction ID
    razorpayOrderID: {
      type: String,
      required: true,
    },
    noOfTickets: {
      type: Number,
      required: true,
      default: 1,
    },
    claimedTickets: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
