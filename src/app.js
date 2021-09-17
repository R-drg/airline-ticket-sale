import express from 'express';
import { getRequiredVariable } from './object-utils.js';


const PORT = getRequiredVariable('SERVER_PORT');
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 deploy realizado no endereço http://localhost:${PORT}`);
})