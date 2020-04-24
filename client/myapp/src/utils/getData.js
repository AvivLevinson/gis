// eslint-disable-next-line

import axios from 'axios';

export default function getData() {
  axios
    .get('http://localhost/5000/getData')
    .then((res) => {
      console.log(`getData from server: ${res}`);
    })
    .catch((err) => {
      console.log(` Error: ${err}`);
    });
}
