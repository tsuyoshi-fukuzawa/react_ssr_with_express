import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SsrHtml from '../components/pages/layouts/ssrHtml'

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <SsrHtml/>
  ).pipe(res);
});

export { serverRoutes }