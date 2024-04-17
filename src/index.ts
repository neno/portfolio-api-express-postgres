import express from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT ?? 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'Neno!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
