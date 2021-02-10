require('dotenv').config();

const ChromeStatus = require('../src/chrome');
const CronJob = require('cron').CronJob;
const SlackAlerter = require('../src/slackAlert');

const slackAlerter = new SlackAlerter();
const chromeStatus = new ChromeStatus();
const googleData = chromeStatus.getChromeReleaseData();

class CronJobber {
  startCron() {
    console.log('startCron() called');
    return new CronJob(process.env.CRON_TIME, async () => {
      const releaseJSON = await googleData.then(result => {
        return chromeStatus.getBetaReleaseAlertJSON(result);
      });
      console.log('new CronJob');
      console.log(releaseJSON);
      if (releaseJSON['new-release-in-next-week'] == true) {
        console.log('release in the next week true');
        const message =
          'Chrome version ' +
          releaseJSON['upcoming-chrome-version'] +
          ' will be released in the next week. Release date: ' +
          releaseJSON['date-it-is-stable'];
        slackAlerter.slackAlert(message);
      } else if (releaseJSON['new-release-in-next-month'] == true) {
        console.log('release in the next month true');
        const message =
          'Chrome version ' +
          releaseJSON['upcoming-chrome-version'] +
          ' will be released in the next month. Release date: ' +
          releaseJSON['date-it-is-stable'];
        slackAlerter.slackAlert(message);
      }
    }).start();
  }
}

module.exports = CronJobber;
