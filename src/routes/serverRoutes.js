import React from 'react';
import ReactDOMServer from 'react-dom/server';

// BrowserRouterのサーバ版
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import SsrHtml from '../components/pages/layouts/ssrHtml'

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  const context = {};
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  ).pipe(res);
});

export { serverRoutes }