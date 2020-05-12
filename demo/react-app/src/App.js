import React from 'react';
import {ajaxPost} from 'xhr';

const App = () => {

  function handleGet() {
    console.log('get')
    ajaxPost('http://localhost:9100',{},'GET')
  }

  function handlePost() {
    console.log('get')
    ajaxPost('http://localhost:9100', {
      data: 123,
    }, 'POST')
  }

  return (
    <div>
      <button onClick={handleGet}>GET</button>
      <button onClick={handlePost}>POST</button>
    </div>
  )
}

export default App;
