const Router = require('@koa/router');

const betarelease = require('./betarelease');

const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Homepage';
});

router.use(betarelease.routes());

module.exports = router;
