import express, { urlencoded } from 'express';
import morgan from 'morgan';

import routes from './routes/index.js';

const app = express();

// middleware
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
