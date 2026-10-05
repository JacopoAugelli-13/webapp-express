import express from 'express';
import mysql from 'mysql2/promise';
import { router } from './routes.js';
import { connector } from './connection.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', router); 
app.use('/:id,', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})