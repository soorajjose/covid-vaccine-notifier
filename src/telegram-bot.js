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
        }
        
         await axios({
            method: 'post',
            url: CHANNEL_URL,
            data: payload,
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        })

        log.info(`${CHANNEL_ID} - Message sent Successfuly`)
    }
    catch(errorMessage){
        log.error('Error - Failed to send message', JSON.stringify(errorMessage))
    }
}

module.exports = sendMessageToBot