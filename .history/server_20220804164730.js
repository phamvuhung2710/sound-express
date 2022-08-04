import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/', (req, res) => {
  console.log('req: ', req.files);
  res.send('OK');
});

app.listen(3000, () => {
  console.log(`Server started running`);
});
