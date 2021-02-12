import express from 'express';

import { authMiddleware } from './middleware/token';
import { addEmails, createEvent, getEvent } from './routes/event';
import { getUser } from './routes/user';

const app = express();

app.use(authMiddleware);
app.use(express.json());

app.get('/user', getUser);
app.get('/event/:eventId', getEvent);
app.post('/event', createEvent);
app.post('/event/add', addEmails);

const server = app.listen(8080, () => {
  const addr = server.address();
  const binding =
    typeof addr === 'string' ? `pipe/socket ${addr}` : `port ${addr.port}`;

  console.log(`Server listening on binding ${binding}`);
});
