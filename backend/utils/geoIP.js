/*

const axios = require('axios');

//const routerData = require('./routerData');

const routerData = {
  destination: 'google.co.il',
  router: [
    { hop: 1, ip: '192.168.1.1', latitude: '', longitude: '' },
    { hop: 2, ip: '10.17.100.12', latitude: '', longitude: '' },
    { hop: 3, ip: '10.17.110.169', latitude: '', longitude: '' },
    { hop: 4, ip: '10.17.110.74', latitude: '', longitude: '' },
    { hop: 5, ip: '10.17.111.11', latitude: '', longitude: '' },
    { hop: 6, ip: '10.17.111.9', latitude: '', longitude: '' },
    { hop: 7, ip: '10.17.111.65', latitude: '', longitude: '' },
    { hop: 8, ip: '10.17.101.1', latitude: '', longitude: '' },
    { hop: 9, ip: '31.210.191.37', latitude: '', longitude: '' },
    { hop: 10, ip: '141.226.65.15', latitude: '', longitude: '' },
    { hop: 11, ip: '216.239.62.45', latitude: '', longitude: '' },
    { hop: 12, ip: '209.85.251.239', latitude: '', longitude: '' },
    { hop: 13, ip: '216.58.210.3', latitude: '', longitude: '' },
  ],
};

const geoIP = (req, res, next) => {
  console.log('GeoIP');
  routerData.router.map((value) => {
    let objAPI = getCordinate(value.ip, geoAPI);
    value.latitude = objAPI[0];
    value.longitude = objAPI[1];
  });
};

function getCordinate(ipAddress, callBack) {
  let cordinate = callBack(ipAddress);
  return [cordinate.latitude, cordinate.longitude];
}

function geoAPI(ipAddress) {
  axios({
    method: 'GET',
    url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
      'x-rapidapi-key': '52616ad272mshbbb18905abebdf8p1f1e1cjsn5a74ad54809d',
    },
    params: {
      ip: ipAddress,
    },
  })
    .then((response) => {
      console.log(JSON.parse(response));
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = geoIP;
*/