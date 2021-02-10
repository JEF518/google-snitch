const axios = require('axios');
require('dotenv').config();

class SlackAlerter {
  slackAlert(message) {
    let url = 'https://slack.com/api/chat.postMessage';
    console.log('slackAlert called');
    const options = {
      channel: process.env.SLACK_CHANNEL,
      username: 'Google Snitch',
      icon_emoji: ':chrome-transparent:',
      text: message,
    };

    axios({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.SLACK_TOKEN,
      },
      data: JSON.stringify(options),
    })
      .then(response => {
        console.log('Sent a Google Snitch Alert');
      })
      .catch(error => {
        console.log(error);
      });
  }
}

module.exports = SlackAlerter;
