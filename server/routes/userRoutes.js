const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const transactionController = require("../controllers/transactionController");
const tokenValidation = require("../middleware/tokenValidation");
const requestsLogs = require("../middleware/requestsLogs");

router.post("/signup", requestsLogs.requestsLogs, userController.createUser);

router.post("/login", requestsLogs.requestsLogs, userController.loginUser);

router.post(
  "/profile",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  userController.getUserProfile
);

router.put(
  "/profile",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  userController.updateUserProfile
);

router.post(
  "/transaction",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  transactionController.createTransaction
);

router.get(
  "/:userId/transactions",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  transactionController.getTransactions
);

router.get(
  "/:userId/transactions/:transactionId",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  transactionController.getTransaction
);

router.put(
  "/transactions/:transactionId",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  transactionController.updateTransaction
);

module.exports = router;
