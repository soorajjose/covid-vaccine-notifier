const config = require("../config.json");
const axios = require("axios").default;
const queryString = require("querystring");
const log = require("./log");
const headers = require("./headers");
const utils = require("./utils");
const dotenv = require("dotenv");
dotenv.config();

const DISTRICT_ID = process.env.DISTRICT_ID || config.cowin.district_Id;

const url = config.cowin.byDistrictUrl;

const query = queryString.stringify({
  district_id: DISTRICT_ID,
  date: utils.getDate(),
});

const getVaccinationCenters = async () => {
  try {
    const result = await axios.get(`${url}?${query}`, { headers });
    const slots = utils.formatSlotCenters(result.data);
    const availableSlots = slots.filter((slot) => slot.available > 0);
    log.info(`App connected to cowin server, has ${slots.length} records`);

    return availableSlots;
  } catch (error) {
    log.error("Failed to connect with cowin apis", error);
  }
};

module.exports = getVaccinationCenters;
