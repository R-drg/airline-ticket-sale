import express from 'express';
import { getRequiredVariable } from './object-utils.js';


const PORT = getRequiredVariable('SERVER_PORT');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})