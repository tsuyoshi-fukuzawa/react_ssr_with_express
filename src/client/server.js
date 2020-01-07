import express from 'express';
import path from 'path';


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './Html';
import App from './App';

const app = express();

// app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({api: 'test3'});
})

// app.get('*', function (req, res) {
//   res.sendFile(path.join('./', 'dist', 'index.html'))
// })
app.get('/', (req, res) => {
  ReactDOMServer.renderToNodeStream(
      <Html>
          <App />
      </Html>
  ).pipe(res);
});


app.listen(3000, ()=> {
  console.log('server running');
})