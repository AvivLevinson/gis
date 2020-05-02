const Traceroute = require('nodejs-traceroute');

const routerData = require('./routerData');

const trace = (req, res, next) => {
  try {
    const tracer = new Traceroute();
    tracer
      .on('destination', (destination) => {
        routerData.destination = destination;
      })
      .on('hop', (hop) => {
        routerData.router.push({
          hop: hop.hop,
          ip: hop.ip,
          latitude: '',
          longitude: '',
        });
      })
      .on('close', (code) => {
        console.log(`close: code ${code}`);
        routerData = JSON.stringify(routerData);
        console.log(routerData);
      });

    tracer.trace(req.body.url);
  } catch (error) {
    console.log('this is error from traceroute:' + error);
  }
};
module.exports = trace;
