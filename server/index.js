import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes/index.js';

const app = express();

// Security measure for targeted attacks
app.disable('x-powered-by')

// middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

// Add production SPA work around
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5000;

app.listen(port, () => (console.log(`Server started on port ${port}`)));
