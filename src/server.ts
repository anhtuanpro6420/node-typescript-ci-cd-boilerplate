import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from node (CI/CD) finished, test');
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
