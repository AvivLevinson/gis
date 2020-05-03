const routerData = require('../models/routerData');

const utilsFunction = require('../utils/trace');

exports.execTrace = (req, res, next) => {
  utilsFunction.trace(req.body.url);
  res.render('map', {
    routerData: routerData.router,
  });
};
