module.exports.requestsLogs = (req, res, next) => {
  console.log(
    `\x1b[36mRequest (${req.method}):\x1b[0m ${
      req.url
    }\n\x1b[36mTime:\x1b[0m ${new Date()}`
  );
  next();
};
