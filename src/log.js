const logger = require("simple-node-logger");

const configurations = {
  dateFormat: "YYYY.MM.DD",
  errorEventName: "fatal",
  logDirectory: "./server-logs",
  fileNamePattern: "roll-<DATE>.log",
};
const log = logger.createRollingFileLogger(configurations);

module.exports = log;
