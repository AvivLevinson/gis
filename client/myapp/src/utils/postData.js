// eslint-disable-next-line
import axios from 'axios';

export default function postData(data) {
  // eslint-disable-next-line
  console.log('postData');
  axios
    .post('http://localhost:5000/postData', { data })
    .then((res) => {
      console.log('fetch succeeded: ' + res.status, res.data);
    })
    .catch((error) => {
      console.log('fetch fails: ' + error);
    });
}
