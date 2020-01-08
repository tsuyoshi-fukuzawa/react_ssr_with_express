import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

const app = express();
var router = express.Router()

router.get('*', (req, res) => {
    let context = {};
    res.write('<!DOCTYPE html>');
    ReactDOMServer.renderToNodeStream(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    ).pipe(res);
});

export { router }