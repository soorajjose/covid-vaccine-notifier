const cron = require("node-cron");
const log = require("./log");
const dotenv = require("dotenv");
const fetchApi = require("./fetch-api");
dotenv.config();

const TIME_INTERVEL = process.env.TIME_INTERVEL || 15;

const app = () => log.info("process started");

// node-core tiny task scheduler for getting vaccine data

cron.schedule(`*/${TIME_INTERVEL} * * * * *`, async () => {
  log.info(`Api call trigger in each ${TIME_INTERVEL} seconds`);
  try {
    await fetchApi();
  } catch (error) {
    log.error("Unable to connect schedule event to server", error);
  }
  log.info("process completed");
});

module.exports = app;
