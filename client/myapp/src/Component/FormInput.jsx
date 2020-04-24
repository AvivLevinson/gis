import React, { useState } from 'react';
//import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import postData from '../utils/postData';
import getData from '../utils/getData';

export default function FormInput() {
  let [urlTarget, setUrl] = useState('https://');

  function handelChange(event) {
    //need to check correct url?
    const url = event.target.value;
    setUrl(url);
    console.log(url);
  }
  function handelSubmit(event) {
    event.preventDefault(); // prevent To open the link
    console.log(`this is handelSubmit:  ${event.target.url.value}`);
    const value = event.target.url.value;
    postData(value);
    getData();
  }

  return (
    <form className='formInput' onSubmit={handelSubmit}>
      <label>
        url:
        <input
          type='url'
          name='url'
          id='url'
          pattern='https://.*'
          placeholder='https://'
          value={urlTarget}
          onChange={handelChange}
        />
      </label>
      <input type='submit' value='Traceroute' />
    </form>
  );
}
