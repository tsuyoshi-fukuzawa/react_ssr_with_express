import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <div>
      test
    </div>
  ).pipe(res);
});

export { serverRoutes }