const getVaccinationCenters = require("./fetch-centers");
const log = require("./log");
const createMessage = require("./create-message");
const sendMessageToBot = require("./telegram-bot");
const utils = require("./utils");

const SLEEP_TIME_TELEGRAM_BOT = 1000

const fetchApi = async () => {
    const availableSlots = await getVaccinationCenters();
    if (availableSlots.length) {
      for (const slot of availableSlots) {
        const message = createMessage(slot)
        await utils.sleep(SLEEP_TIME_TELEGRAM_BOT);
        await sendMessageToBot(message);
      }
      return

    } else if(availableSlots.length === 0) {
      log.info("There is no slot for current district");
      return;

    }
};

module.exports = fetchApi;
