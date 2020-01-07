import express from 'express';

const app = express();
import { router } from './Routes/serverRoutes';

app.use(express.static('public'));

app.get('/', router);
app.get('/about', router);

app.listen(3000);