const axios = require('axios');
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class ChromeStatus {
  constructor() {}

  async getChromeReleaseData() {
    return await axios
      .get('https://www.chromestatus.com/features/schedule')
      .then(function (response) {
        const html = response.data;
        const dom = new JSDOM(html);
        const theRelevantScript = dom.window.document
          .getElementsByTagName('body')[0]
          .getElementsByTagName('script')[1].text;
        let theContent = JSON.parse(theRelevantScript.slice(100, 3202));
        return theContent;
      });
  }
  getBetaReleaseAlertJSON(data) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let newReleaseinNextWeek = false;
    let newReleaseinNextMonth = false;
    const timestampNow = Math.floor(Date.now() / 1000);
    const timestampBetaRelease = Date.parse(data.beta.stable_date) / 1000;
    const test = 1612954800;
    const weekMilliseconds = 604800;
    const monthMilliseconds = 2628288;
    const nowPlusWeek = timestampNow + weekMilliseconds;
    const nowPlusMonth = timestampNow + monthMilliseconds;

    if (nowPlusWeek > timestampBetaRelease) {
      newReleaseinNextWeek = true;
    }
    if (nowPlusMonth > timestampBetaRelease) {
      newReleaseinNextMonth = true;
    }
    return {
      'current-chrome-version': data.stable.version,
      'upcoming-chrome-version': data.beta.version,
      'date-it-is-stable': new Date(
        Date.parse(data.beta.stable_date)
      ).toLocaleDateString('en-GB', options),
      'date-today': new Date(Date.now()).toLocaleDateString('en-GB', options),
      'new-release-in-next-week': newReleaseinNextWeek,
      'new-release-in-next-month': newReleaseinNextMonth,
    };
  }
}

module.exports = ChromeStatus;
