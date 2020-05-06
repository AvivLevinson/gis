const Traceroute = require('nodejs-traceroute');

const routerData = require('../models/routerData');

const geoip = require('geoip-lite');

exports.trace = (url) => {
  trace = new Promise((resolve, reject) => {
    try {
      const tracer = new Traceroute();
      tracer
        .on('destination', (destination) => {
          routerData.destination = destination;
        })
        .on('hop', (hop) => {
          console.log('on treace route');
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
          resolve(routerData);
          console.log(`close: code ${code}`);
        });

      tracer.trace(url);
    } catch (error) {
      console.log('this is error from traceroute:' + error);
      reject(error);
    }
  });
  //trace.then((data) => console.log(data));
  return trace;
};
