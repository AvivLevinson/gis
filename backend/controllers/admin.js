const routerData = require('../models/routerData');

const utilsFunction = require('../utils/trace');

exports.execTrace = async (req, res, next) => {
  try {
    utilsFunction.trace(req.body.url).then(console.log('execTrace'));
  } catch (error) {
    console.log('this is error from execTrace: ' + error);
  }
  res.render('map', {
    routerData: routerData.router,
  });
};
