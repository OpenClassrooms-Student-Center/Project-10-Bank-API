const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    balanceLeft: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
    pspReference: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);
module.exports = mongoose.model("Transaction", transactionSchema);
