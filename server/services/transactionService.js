const Transaction = require("../database/models/transactionModel");
const User = require("../database/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createPspReference = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

module.exports.createTransaction = async (serviceData) => {
  try {
    console.log(serviceData.headers.authorization);
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);

    if (!decodedJwtToken) {
      throw new Error("Invalid token!");
    }

    const user = await User.findOne({ _id: serviceData.body.userId });

    if (!user) {
      throw new Error("User not found!");
    }
    const newTransaction = new Transaction({
      ...serviceData.body,
      userId: user._id,
      accountId: serviceData.body.accountId,
      accountName: serviceData.body.accountName,
      balanceLeft: user.balanceLeft || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...(serviceData.body.description
        ? {
            description: serviceData.body.description,
          }
        : { description: "No description" }),
      ...(serviceData.body.category
        ? { category: serviceData.body.category }
        : { category: "No category" }),
      ...(serviceData.body.notes
        ? { notes: serviceData.body.notes }
        : { notes: "No notes" }),
      pspReference: createPspReference(),
      status: "PENDING",
      type: serviceData.body.type,
    });

    const result = await newTransaction.save();

    return result;
  } catch (error) {
    console.error("Error in transactionService.js", error);
    throw new Error(error);
  }
};

module.exports.getTransactions = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error("User not found!");
    }

    const transactions = await Transaction.find({
      userId: serviceData.params.userId,
    });

    const formattedTransactions = transactions.map((transaction) => {
      delete transaction.__v;
      const { _id, ...rest } = transaction.toObject();
      return {
        id: _id,
        ...rest,
      };
    });

    return formattedTransactions;
  } catch (error) {
    console.error("Error in transactionService.js", error);
    throw new Error(error);
  }
};

module.exports.getTransaction = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error("User not found!");
    }

    const transaction = await Transaction.findOne({
      _id: serviceData.params.transactionId,
    });

    delete transaction.__v;

    return {
      id: transaction._id,
      ...transaction.toObject(),
    };
  } catch (error) {
    console.error("Error in transactionService.js", error);
    throw new Error(error);
  }
};

const allowedFields = ["category", "notes"];

module.exports.updateTransaction = async (serviceData) => {
  try {
    const jwtToken = serviceData.headers.authorization
      .split("Bearer")[1]
      .trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });

    if (!user) {
      throw new Error("User not found!");
    }

    const transaction = await Transaction.findOne({
      _id: serviceData.params.transactionId,
    });

    if (!transaction) {
      throw new Error("Transaction not found!");
    }

    const bodyKeys = Object.keys(serviceData.body);

    const invalidFields = bodyKeys.filter(
      (key) => !allowedFields.includes(key)
    );

    if (invalidFields.length) {
      throw new Error(`Invalid fields: ${invalidFields.join(", ")}`);
    }

    const updatedTransaction = await Transaction.findOneAndUpdate(
      { _id: serviceData.params.transactionId },
      { ...serviceData.body, updatedAt: new Date() },
      { new: true, useFindAndModify: false }
    );

    delete updatedTransaction.__v;

    return {
      id: updatedTransaction._id,
      ...updatedTransaction.toObject(),
    };
  } catch (error) {
    console.error("Error in transactionService.js", error);
    throw new Error(error);
  }
};
