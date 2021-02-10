const Router = require('@koa/router');
const ChromeStatus = require('../src/chrome');
const router = new Router();

router.get('/releasedata', async ctx => {
  const chromeStatus = new ChromeStatus();
  const googleData = chromeStatus.getChromeReleaseData();
  ctx.body = await googleData.then(result => {
    return chromeStatus.getBetaReleaseAlertJSON(result);
  });
});

module.exports = router;
