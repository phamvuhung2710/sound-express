import express from express;

const app = express();

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(process.env.PORT, () => {
  console.log(`Server started running on port ${process.env.PORT}`);
});