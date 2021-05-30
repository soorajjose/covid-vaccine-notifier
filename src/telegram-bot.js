const config = require('../config.json')
const axios = require('axios').default
const log = require('./log')
const dotenv = require('dotenv');
dotenv.config();

const CHANNEL_ID = process.env.CHANNEL_ID || config.app.channelId

const BOT_TOKEN = process.env.BOT_TOKEN || config.app.botToken

const messageType = {
    sendMessage : 'sendMessage',
    updateMessage : 'updateMessage'
}

const CHANNEL_URL = `${config.app.host}${BOT_TOKEN}/${messageType.sendMessage}`


const sendMessageToBot = async (botMessage) => {
    try{
        const payload = {
            chat_id: CHANNEL_ID,
            text: botMessage,
            parse_mode: 'MarkdownV2'
        }

        await axios.post(CHANNEL_URL, payload)
        log.info(`${CHANNEL_ID} - Message sent Successfuly`)
    }
    catch(error){
        log.error('Error - Failed to send message',error)
    }
}

module.exports = sendMessageToBot