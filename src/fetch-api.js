const getVaccinationCenters = require("./fetch-centers");
const log = require("./log");
const formatMessage = require("./format-message");
const sendMessageToBot = require("./telegram-bot");
const utils = require("./utils");

const fetchApi = async () => {
  const availableSlots = await getVaccinationCenters();
  if (availableSlots.length === 0) {
    log.info("There is no slot for current district");
    return;
  }
  for (const slot of availableSlots) {
    const message = formatMessage(slot);
    await utils.sleep();
    await sendMessageToBot(message);
  }
  log.info(
    `slots available: ${availableSlots.length} messages sent to telegram channel`
  );
  return;
};

module.exports = fetchApi;
