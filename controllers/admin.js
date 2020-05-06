//const RouterData = require('../models/routerData');

const utilsFunction = require('../utils/trace');

//const routerData = require('../models/routerData');
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'routers.json'
);

exports.execTrace = (req, res, next) => {
  console.log('exeTrace');
  let url = req.body.url.split('https://')[1];

  utilsFunction
    .trace(url)
    .then((Data) => {
      console.log('execTrace function:');
      console.log(Data);
      fs.writeFile(p, JSON.stringify(Data), function (err) {
        if (err) {
          console.log(err);
        }
        console.log('The file was saved!');
        res.render('map',{
          showtable: true,
          routerData:Data,
        });
      });
    })
    .catch((err) => console.log('this is error from admin router' + err));
};

exports.getJsonData = (req, res, next) => {
  
  console.log('Json');
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      console.log('res.json');
      fileContent = JSON.parse(fileContent);
      res.status(200).json(fileContent);
    }
  });
  
};
