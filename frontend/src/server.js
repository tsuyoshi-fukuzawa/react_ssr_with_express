import express from 'express';

const app = express();
import { router } from './routes/serverRoutes';
app.use(express.static('dist'));

app.get('/', router);
app.get('/about', router);

app.listen(3000);