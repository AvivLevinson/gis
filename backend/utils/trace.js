const Traceroute = require('nodejs-traceroute');

const routerData = require('../models/routerData');

var geoip = require('geoip-lite');

exports.trace =  (url) => {
  
  try {
    const tracer = new Traceroute();
    tracer
      .on('destination', (destination) => {
        routerData.destination = destination;
      })
      .on('hop', (hop) => {
        let geo = geoip.lookup(hop.ip);
        if (geo === null) {
          routerData.router.push({
            hop: hop.hop,
            ip: hop.ip,
            latitude: '',
            longitude: '',
          });
        } else {
          routerData.router.push({
            hop: hop.hop,
            ip: hop.ip,
            latitude: geo.ll[0],
            longitude: geo.ll[1],
          });
        }
      })
      .on('close', (code) => {
        routerData.router.forEach((value) => {
          console.log(JSON.stringify(value));
        });
        console.log(`close: code ${code}`);
      });

    tracer.trace('www.google.co.il');
  } catch (error) {
    console.log('this is error from traceroute:' + error);
  }
};
