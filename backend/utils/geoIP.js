const axios = require('axios');

const routerData = require('./routerData');

const geoIP = (req, res, next) => {
  routerData.router.map((value) => {
    [latitude, longitude] = geoAPI(value.ip);
  });
};

function geoAPI(ip) {
  let longitude, longitude;

  axios({
    method: 'GET',
    url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
      'x-rapidapi-key': '52616ad272mshbbb18905abebdf8p1f1e1cjsn5a74ad54809d',
    },
    params: {
      ip: 'this is going to be the ip ',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = geoIP;
