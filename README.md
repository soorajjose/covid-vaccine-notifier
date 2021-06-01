# COVID-19 Vaccine Availability Telegram Notifier 


This is node project to check the available slots for Covid-19 Vaccination Centers from CoWIN API in India. If slot is available, trigger the notification to telegram channel using Bot. 

## Prerequisites

- You need a Telegram Bot and Telegram Channel account , Thanks this blog for  [Telegram Bot Configuration ](https://sendpulse.com/knowledge-base/chatbot/create-telegram-chatbot/) 


## Installation

covin-vaccine-notifier requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies

```sh
npm install
```
## Configuration 

Place the [config variable](https://github.com/soorajjose/covid-vaccine-notifier/blob/main/config.json)  **botToken, channelId, district_Id, time_Intervel** in  ```/config.json ``` file . The district_id is which get from cowin portal api docs or newtwork tab api url

## Run Project

```sh
npm start
```
## Deployment to Heroku 

Here we are going to depoly our app through github account connect method , you must to commit all changes and push the code to github . Please note : ```Don't commit botToken, channelId``` values. This can configure environment variables in Heroku.

Login to Heruku site and create a new project with any name. Connect to github account and select the repostries  then click the ```Deploy Branch``` button.

Once the deployment success , go to Resourses settings tab , Then click on the ```Reveal config var``` button , Add the values has key value pair 

| Key | Value |
| ------ | ------ |
| BOT_TOKEN | keep your bot api key |
| CHANNEL_ID | keey your channel name eg @xxxxxx |
| DISTRICT_ID | keep your District id |
| TIME_INTERVEL | keep  the value   between ```0 to 59``` eg  30 so every 30 seconds it trigger the api and check the slot availiblity |


Once the environment variable add go to Restart the server .
 - Click on the ```More Button``` top of the heruku website , then select the ```Restart all dynos```

## License

MIT

Show your support by starring the repository 😊

