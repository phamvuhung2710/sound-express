import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('req: ', req);
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log(`Server started running`);
});
