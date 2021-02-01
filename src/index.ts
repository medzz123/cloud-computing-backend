import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const params = req.params;

  res.send(`Hello World! ${JSON.stringify(params)}`);
});

app.get('/other', (_, res) => {
  res.send(`I am in a different route! `);
});

app.get('/ci', (_, res) => {
  res.send(`Checking if cloud build works`);
});

const server = app.listen(8080, () => {
  const addr = server.address();
  const binding =
    typeof addr === 'string' ? `pipe/socket ${addr}` : `port ${addr.port}`;

  console.log(`Server listening on binding ${binding}`);
});
