import express from 'express';
import path from 'path';

// for dom rendering
import React from 'react';
import ReactDOMServer from 'react-dom/server';


const app = express();
app.use(express.static(path.join('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({api: 'test'});
})

app.get('/contact', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <div>
      test
    </div>
  ).pipe(res);
})

app.get('*', function (req, res) {
  res.sendFile(path.join('./', 'dist', 'index.html'))
})


app.listen(3000, ()=> {
  console.log('server running');
})